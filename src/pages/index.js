import React from "react"
import Animated from 'components/Animated'
import {Row, Col, Layout, Typography} from 'antd'
import Image from "../components/image"
import SEO from "../components/seo"
import SignUpForm from 'components/SignUpForm'
import styles from './Index.module.scss'


class IndexPage extends React.Component {

  state = {
    status: 'no-data',
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
    code: ''
  };

  componentDidMount() {
    const gatsbyRoot = document.querySelector('#___gatsby');
    const nodes = gatsbyRoot.querySelectorAll('div');
    document.querySelector('body').style.background = '#000';
    gatsbyRoot.style.height = '100%';
    nodes[0].style.height = 'inherit';
    nodes[1].style.height = 'inherit';
    this.setState({status: 'data-ready'})
  }

  renderHome = () => {
    const {Header, Footer, Content} = Layout;
    const {Paragraph} = Typography;
    return (
      <div style={{height: '100%'}}>
        <SEO title="Songer Audio"/>
        <Animated>
          <Col type="flex" span={24}
               style={{height: '100%', background: 'linear-gradient(to bottom, #444444 0%,#000000 100%)'}}>
            <Row style={{height: 'inherit'}} justify="center">
              <Col style={{height: 'inherit'}} type="flex">
                <Layout className={styles.mainLayout}>
                  <Header style={{height: '60px'}}>
                    <Paragraph className={styles.headerComingSoon}>
                      Coming Soon
                    </Paragraph>
                  </Header>
                  <Content className={styles.mainContent}>
                    <div style={{position: 'relative', maxWidth: '300px', margin: '0 auto'}}>
                      <Image img="songer_audio_logo.png"/>
                    </div>
                    <p>Finely handcrafted field coil loudspeakers</p>
                    <SignUpForm/>
                  </Content>
                  <Footer className={styles.mainFooter}>
                    &copy; 2019
                  </Footer>
                </Layout>
              </Col>
            </Row>
          </Col>
        </Animated>
      </div>

    )
  };

  render() {
    const {status} = this.state;
    return (
      <div>
        {status === 'data-ready' && this.renderHome()}
      </div>
    )
  }
}

export default IndexPage
