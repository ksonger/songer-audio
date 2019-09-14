const aws = require('aws-sdk');
const ses = new aws.SES();

'use strict';

exports.handler = async(event) => {
  let responseCode = 200;
  console.log("request: " + JSON.stringify(event));


  try {
    await sendEmail('ken@songeraudio.com', event);
  } catch(error)  {
    console.log(error);
  }

  let responseBody = {
    message: 'OK',
    input: event
  };

  // The output from a Lambda proxy integration must be
  // in the following JSON object. The 'headers' property
  // is for custom response headers in addition to standard
  // ones. The 'body' property  must be a JSON string. For
  // base64-encoded payload, you must also set the 'isBase64Encoded'
  // property to 'true'.
  let response = {
    statusCode: responseCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT"
    },
    body: JSON.stringify(responseBody)
  };
  console.log("response: " + JSON.stringify(response));
  return response;

};

async function sendEmail(emailAddress, event) {

  let eventString = '';
  const data = event.queryStringParameters ? event.queryStringParameters : JSON.parse(event.body);

  Object.keys(data).forEach((key) => {
    eventString += `${key}: ${data[key]}<br />`;
  });

  const params = {
    Destination: {ToAddresses: [emailAddress]},
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<html><body><p>You have received comments:</p>
                           <p>${eventString}</p></body></html>`
        },
        Text: {
          Charset: 'UTF-8',
          Data: `You received comments: ${eventString}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Songer Audio Comments Form'
      }
    },
    Source: 'info@songeraudio.com'
  };
  await ses.sendEmail(params).promise();
}
