import React from "react"
import {Row, Col, Layout, Menu, Typography} from 'antd'
import Image from "components/image"
import SignUpForm from 'components/SignUpForm'



class AboutPage extends React.Component {

  state = {
    status: 'no-data',
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
    code: ''
  };

  componentDidMount () {
    const gatsbyRoot = document.querySelector('#___gatsby');
    const nodes = gatsbyRoot.querySelectorAll('div');
    document.querySelector('body').style.background = '#000';
    gatsbyRoot.style.height = '100%';
    nodes[0].style.height = 'inherit';
    nodes[1].style.height = 'inherit';
    this.setState({ status: 'data-ready' })
  }

  renderAbout = () => {
    const { Header, Footer, Content } = Layout;
    const { Paragraph } = Typography;
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

export default AboutPage
