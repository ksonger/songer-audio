import {Auth} from 'aws-amplify'
import {Button, Col, Form, Input, message, Row, Typography} from 'antd'
import React from 'react'
import styles from "./SignUpForm.module.scss";
import {createSubscription, updateSubscription} from '../../api'
import formatPhone from '../../utils/formatPhone'
import { pwd, validEmail } from '../../utils/utilities'
import { v4 as uuidv4 } from 'uuid';

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
};

class SignUpFormComponent extends React.Component {
  state = {
    formStatus: 'sign-up',
    givenName: '',
    familyName: '',
    emailAddress: '',
    phoneNumber: '',
    uuid: null,
    code: ''
  };

  componentDidMount() {
    if(document.querySelector('#givenname'))  {
      document.querySelector('#givenname').focus()
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  /**
   * Uses Amplify Auth to sign up a subscriber
   * @param givenname
   * @param familyname
   * @param emailaddress
   * @param phonenumber
   * @returns {Promise<void>}
   */
  signUp = async ({ givenname, familyname, emailaddress, phonenumber }) => {

    let error = false;

    await this.setState({
      givenName: givenname,
      familyName: familyname,
      emailAddress: emailaddress,
      phoneNumber: phonenumber,
      uuid: uuidv4()
    });

    const { givenName, familyName, emailAddress, phoneNumber, uuid } = this.state;

    const attrs = {
      email: emailAddress,
      phone_number: phoneNumber.length ? formatPhone.toE164(phoneNumber) : phoneNumber,
      given_name: givenName,
      family_name: familyName
    }

    try {
      await Auth.signUp({
        username: emailAddress,
        password: pwd(16),
        attributes: attrs
      })
      message.info('Check your email for a confirmation code.');
      await this.setState({formStatus: 'verify'})

    } catch (err) {
      message.error(err.message)
      error = true;
    }

    const subscriber = Object.assign(
      {},
      attrs,
      {
        id: uuid,
        phone_number_verified: false,
        email_verified: false
      })
    if(!error)  {
      try {
        await createSubscription(subscriber)
      } catch(err) {
        console.warn(err.message)
      }
    }
  };

  /**
   * Uses Amplify Auth to confirm the sign-up email address
   * @returns {Promise<void>}
   */
  handleConfirm = async () => {
    const { emailAddress, uuid } = this.state;
    const { getFieldValue } = this.props.form;
    const {onFormSubmit} = this.props;
    try {
      await Auth.confirmSignUp(emailAddress, getFieldValue('code'));
      message.success('Thank you for confirming your email.');
      await this.setState({
        formStatus: 'sign-up',
        givenName: '',
        familyName: '',
        emailAddress: '',
        phoneNumber: '',
        uuid: null,
        code: ''
      })
      onFormSubmit();
    } catch (err) {
      console.warn(err);
      message.error('Something went wrong.  Please try again.')
    }

    try {
      await updateSubscription({id: uuid, email_verified: true})
    } catch(err) {
      console.warn(err.message)
    }
  };

  /**
   * Validates form and submits sign up
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.signUp(values).catch(() => {
          console.warn('error')
        })
      }
    })
  };


  /**
   * Resends a verification code via Email or SMS
   * @returns {Promise<void>}
   */
  handleSendNewCode = async () => {
    const { emailAddress } = this.state;
    try {
      Auth.resendSignUp(emailAddress).then(() => {
        message.success(`A new code has been sent to ${emailAddress}`)
      })
    } catch(err) {
      message.error('Something went wrong.  Please try again.')
    }

  };

  render () {
    const { code, emailAddress, familyName, formStatus, givenName, phoneNumber } = this.state;
    const { onFormCancel } = this.props;
    const { Paragraph } = Typography;
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const validCode = () => {
      return code.length !== 6
    };
    return (

      <Row type="flex" justify="center">
        <Col span={24}>
          {formStatus === 'sign-up' && (
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
                    { validator: validEmail },
                  ],
                })(
                  <Input
                    id="email"
                    placeholder="Email (required)"
                    className={styles.formInput}
                  />
                )}
              </Form.Item>
              <Form.Item label="">
                {getFieldDecorator('phonenumber', {
                  initialValue: phoneNumber,
                  rules: [
                    { required: false },
                  ],
                })(
                  <Input
                    onKeyUp={formatPhone.onPhoneChange}
                    id="phonenumber"
                    placeholder="Mobile Phone"
                    className={styles.formInput}
                  />
                )}
              </Form.Item>
              <Row type="flex" justify="end">
                <Form.Item style={{marginBottom: 0}}>
                  <Button className={styles.cancelButton} onClick={onFormCancel} type="secondary">
                    Cancel
                  </Button>
                </Form.Item>
                <Form.Item style={{marginBottom: 0}}>
                  <Button className={styles.signUpButton} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Subscribe
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          )}
          {formStatus === 'verify' && (
            <Form layout="vertical">
              <Row type="flex" justify="center">
                <Paragraph className={styles.codeSentMessage}>Thank you for subscribing. Please, take a moment to confirm your email: <br />
                </Paragraph>
                <Paragraph className={styles.codeSentEmail}>{emailAddress}</Paragraph>
              </Row>
              <Form.Item className={styles.codeInput} label="">
                {getFieldDecorator('code', {
                  initialValue: code,
                  rules: [
                    { required: true, message: 'Please provide your 6-digit confirmation.' },
                    { validator: validCode },
                  ],
                })(
                  <Input
                    id="code"
                    placeholder="- - - - - -"
                    maxLength={6}
                  />
                )}
              </Form.Item>
              <Paragraph className={styles.resendMessage}>
                Didn&apos;t receive a code?{' '}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <a onClick={this.handleSendNewCode}>Resend Code</a>
              </Paragraph>
              <Row type="flex" justify="end" className={styles.confirmActions}>
                <Form.Item className={styles.confirmAction}>
                  <Button className={styles.cancelButton} onClick={onFormCancel} type="secondary">
                    Cancel
                  </Button>
                </Form.Item>
                <Form.Item className={styles.confirmAction}>
                  <Button className={styles.signUpButton}
                          onClick={this.handleConfirm}
                          type="primary"
                          disabled={hasErrors(getFieldsError())}>
                    Confirm
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

const SignUpForm = Form.create()(SignUpFormComponent);
export default SignUpForm