import React from "react"
import {Row, Col} from 'antd'



class ContactPage extends React.Component {

  state = {
    status: 'no-data',
  };

  componentDidMount () {
    this.setState({status: 'data-ready'})
  }

  renderAbout = () => {
    return (
      <Row>
        <Col>
          coming soon
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
