import React from "react"
import {Row, Col, Typography} from 'antd'
import responsive from 'constants/responsive'
import ContactForm from 'components/ContactForm'
import styles from './Contact.module.scss'
import classNames from "classnames";



class ContactPage extends React.Component {

  state = {
    status: 'no-data',
  };

  componentDidMount () {
    this.setState({status: 'data-ready'})
  }

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  mobile = () => {
    return window.innerWidth <= responsive.BREAKPOINTS[this.state.breakpoint]
  };

  styleState = (element) => {
    return this.mobile() ? `${element}--mobile` : `${element}--desktop`
  };

  renderAbout = () => {
    const {Paragraph} = Typography
    return (
      <Row type="flex" justify="center" className={classNames(styles.contact, styles[this.styleState('contact')])}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Paragraph className={classNames(styles.bodyText, styles[this.styleState('bodyText')])}>
            Comments and inquiries are welcome.  Please feel free to email us at <a href='mailto:info@songeraudio.com'>info@songeraudio.com</a>, or submit the contact form below.
          </Paragraph>
          <ContactForm />
        </Col>
      </Row>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div>
        {status === 'data-ready' && this.renderAbout()}
      </div>
    )
  }
}

export default ContactPage
