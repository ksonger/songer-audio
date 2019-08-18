import React from "react"
import {Row, Col, Layout, Typography} from 'antd'
import Image from "../components/image"
import SEO from "../components/seo"

import styles from './Index.module.scss'


class IndexPage extends React.Component {

  state = {}

  componentDidMount() {
    const gatsbyRoot = document.querySelector('#___gatsby')
    const nodes = gatsbyRoot.querySelectorAll('div')
    gatsbyRoot.style.height = '100%'
    nodes[0].style.height = 'inherit'
    nodes[1].style.height = 'inherit'
  }

  render() {
    const { Header, Footer, Content } = Layout;
    const {Paragraph, Text} = Typography
    return (
      <>
        <SEO title="Songer Audio"/>
        <Col type="flex" span={24} style={{background: 'linear-gradient(to bottom, #444444 0%,#000000 100%)'}}>
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
                  <Paragraph>
                    <Text >Sign up</Text> to receive updates
                  </Paragraph>
                </Content>
                <Footer className={styles.mainFooter}>
                  &copy; 2019
                </Footer>
              </Layout>
            </Col>
          </Row>
        </Col>
      </>

    )
  }
}

export default IndexPage
