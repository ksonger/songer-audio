import {Button, Col, Form, Input, message, Row} from 'antd'
import React from 'react'
import styles from "./ContactForm.module.scss";
import regex from '../../constants/regex'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";
import {sendComments} from "../../api";

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
};

class ContactFormComponent extends React.Component {
  state = {
    formStatus: 'contact',
    givenName: '',
    familyName: '',
    emailAddress: '',
    comments: '',
    code: ''
  };

  componentDidMount () {
    if (document.querySelector('#givenname')) {
      document.querySelector('#givenname').focus()
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  /**
   * Custom form field validator
   * @param rule {*}
   * @param value {string}
   * @param cb {Function}
   */
  validEmail = (rule, value, cb) => {
    if (String(value).match(regex.EMAIL_REGEX)) {
      cb()
    } else if (value.length > 0) {
      cb('Please provide a valid email.')
    } else {
      cb('')
    }
  };

  /**
   * Error validates form, and submits the comments
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err) => {
      if (!err) {
        const { getFieldValue, resetFields } = this.props.form;
        sendComments({
          given_name: getFieldValue('givenname'),
          family_name: getFieldValue('familyname'),
          email_address: getFieldValue('emailaddress'),
          comments: getFieldValue('Comments')
        })
          .then((response) => {
            message.success(String(response))
          })
          .catch((error) => {
            message.error(String(error))
          })
          .finally(() => {
            resetFields();
          })
      }
    })
  };

  render () {
    const { comments, emailAddress, familyName, formStatus, givenName } = this.state;
    const { TextArea } = Input;
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (

      <Row type="flex" justify="center"
           className={classNames(styles.contactForm, styles[styleState('contactForm')])}>
        <Col span={24}>
          {formStatus === 'contact' && (
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Form.Item label="">
                {getFieldDecorator('givenname', {
                  initialValue: givenName,
                  rules: [{ required: false }],
                })(<Input className={styles.formInput} id="given_name" placeholder="First Name"/>)}
              </Form.Item>
              <Form.Item label="">
                {getFieldDecorator('familyname', {
                  initialValue: familyName,
                  rules: [{ required: false }],
                })(<Input className={styles.formInput} id="family_name" placeholder="Last Name"/>)}
              </Form.Item>
              <Form.Item label="">
                {getFieldDecorator('emailaddress', {
                  initialValue: emailAddress,
                  rules: [
                    { required: true, message: 'Please provide a valid email.' },
                    { validator: this.validEmail },
                  ],
                })(
                  <Input
                    id="email"
                    placeholder="Email"
                    className={styles.formInput}
                  />
                )}
              </Form.Item>
              <Form.Item label="">
                {getFieldDecorator('Comments', {
                  initialValue: comments,
                  rules: [
                    { required: true },
                  ],
                })(
                  <TextArea
                    rows={6}
                    id="comment"
                    placeholder="Message"
                    className={styles.formInput}
                    maxLength={1500}
                  />
                )}
              </Form.Item>
              <Row type="flex" justify="end">
                <Form.Item style={{ marginBottom: 0 }}>
                  <Button className={styles.submitButton} type="primary" htmlType="submit"
                          disabled={hasErrors(getFieldsError())}>
                    Submit
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          )}
        </Col>
      </Row>
    )
  }
}

const ContactForm = Form.create()(ContactFormComponent);
export default ContactForm