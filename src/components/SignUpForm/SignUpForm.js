import {Auth} from 'aws-amplify'
import {Button, Form, Input, message, Row, Typography} from 'antd'
import React from 'react'
import styles from "../../pages/Index.module.scss";
import auth from 'constants/auth'
import regex from 'constants/regex'
import formatPhone from 'utils/format-phone'

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}

class SignUpFormComponent extends React.Component {
  state = {
    formStatus: 'hide',
    givenName: '',
    familyName: '',
    emailAddress: '',
    phoneNumber: '',
    code: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  signUp = async({givenname, familyname, emailaddress, phonenumber}) => {
    await this.setState({
      givenName: givenname,
      familyName: familyname,
      emailAddress: emailaddress,
      phoneNumber : phonenumber
    });
    const {givenName, familyName, emailAddress, phoneNumber} = this.state;
    const username = emailAddress;
    /**
     * Auth.signUp requires a password of some kind.
     * Generates a random alphanumeric string of length len
     * @param {number} len
     * @returns {string}
     */
    const pwd = (len) => {
      let retVal = '';
      const chars = auth.PASSWORD_CHARS;
      for(let i = 0, n = chars.length; i < len; ++i) {
        retVal += chars.charAt(Math.random() * n)
      }
      return retVal
    };

    try {
      console.log({username: emailAddress, password: pwd(16), attributes: {email: emailAddress, phone_number: formatPhone.toE164(phoneNumber), given_name: givenName, family_name: familyName}})
      await Auth.signUp({
        username: emailAddress,
        password: pwd(16),
        attributes: {
          email: emailAddress,
          phone_number: formatPhone.toE164(phoneNumber),
          given_name: givenName,
          family_name: familyName
        }
      });
      message.success('Successfully signed up.')
    } catch(err) {
      message.error('Error signing up: ', err)
    }
  }

  confirmSignup = async() => {
    const {username, code} = this.state;
    try {
      await Auth.confirmSignUp(username, code);
      message.success('User successfully signed up.')
    } catch(err) {
      message.error('Error confirming sign up: ', err)
    }
  };

  /**
   * Custom form field validator
   * @param rule {*}
   * @param value {string}
   * @param cb {Function}
   */
  validPhoneNumber = (rule, value, cb) => {
    if(String(value).match(regex.PHONE_REGEX)) {
      cb()
    } else if(value.length > 0) {
      cb('Please provide a mobile phone number.')
    } else {
      cb('')
    }
  };

  /**
   * Custom form field validator
   * @param rule {*}
   * @param value {string}
   * @param cb {Function}
   */
  validEmail = (rule, value, cb) => {
    if(String(value).match(regex.EMAIL_REGEX)) {
      cb()
    } else if(value.length > 0) {
      cb('Please provide a valid email.')
    } else {
      cb('')
    }
  };


  showForm = () => {
    this.setState({formStatus: 'form'})
  };

  hideForm = () => {
    this.setState({formStatus: 'hide'})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        this.signUp(values).catch(() => {console.log('error')})
      }
    })
  }

  render() {
    const {emailAddress, familyName, formStatus, givenName, phoneNumber} = this.state;
    const {Paragraph, Text} = Typography;
    const {getFieldDecorator, getFieldsError, getFieldValue} = this.props.form
    return (
      <Row type="flex" justify="center">
        {formStatus === 'hide' && (
          <Paragraph className={styles.cta}>
            <Text onClick={this.showForm} className={styles.ctalink}>Sign up</Text> to receive updates
          </Paragraph>
        )}


        {formStatus === 'form' && (
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Form.Item label="">
              {getFieldDecorator('givenname', {
                initialValue: givenName,
                rules: [{required: true}],
              })(<Input id="given_name" placeholder="First Name"/>)}
            </Form.Item>
            <Form.Item label="">
              {getFieldDecorator('familyname', {
                initialValue: familyName,
                rules: [{required: true}],
              })(<Input id="family_name" placeholder="Last Name"/>)}
            </Form.Item>
            <Form.Item label="">
              {getFieldDecorator('emailaddress', {
                initialValue: emailAddress,
                rules: [
                  {required: true, message: 'Please provide a valid email.'},
                  {validator: this.validEmail},
                ],
              })(
                <Input
                  id="email"
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item label="">
              {getFieldDecorator('phonenumber', {
                initialValue: phoneNumber,
                rules: [
                  {required: true, message: 'Please provide a mobile phone number.'},
                  {validator: this.validPhoneNumber},
                ],
              })(
                <Input
                  onKeyUp={formatPhone.onPhoneChange}
                  id="phonenumber"
                  placeholder="Mobile Phone"
                />
              )}
            </Form.Item>
            <Row type="flex" justify="center">
              <Form.Item>
                <Button onClick={this.hideForm} type="secondary">
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                  Sign Up
                </Button>
              </Form.Item>
            </Row>
          </Form>
        )}
      </Row>
    )
  }
}

const SignUpForm = Form.create()(SignUpFormComponent)
export default SignUpForm