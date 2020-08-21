
import React from "react"
import {Row, Col, Layout, Typography, Modal} from 'antd'
import classNames from 'classnames'
import SignUpForm from '../SignUpForm'
import responsive from '../../constants/responsive'
import logo from '../../images/sa_logo_e6cc8e.png'
import styles from './SiteLayout.module.scss'
import SiteMenu from "./SiteMenu";
import {styleState} from "../../utils/style";
import {debounce} from "lodash";

class SiteLayout extends React.Component {

  state = {
    isMobile: false,
    point: null,
    showModal: false,
    loading: false
  };

  /**
   * Update table data per display form factor
   */
  onWindowResize = () => {
    const windowWidth = window.innerWidth;
    let bp = Object.keys(responsive.BREAKPOINTS).map((key) => {
      if (windowWidth > responsive.BREAKPOINTS[key]) {
        return key
      }
    })

    const debounced = debounce(
      async () => {
        await this.setState({ isMobile: windowWidth < responsive.BREAKPOINTS[responsive.BREAKPOINT], point: bp })
        const root = document.getElementById('root');
        root.style.right = root.clientWidth - root.offsetWidth + 'px';
      },
      200,
      false
    );
    debounced()
  }

  onRouteChange = async (event) => {
    this.activeMenuItem(event.detail.path());
    await document.getElementById('root');
    const root = document.getElementById('root');
    root.style.right = root.clientWidth - root.offsetWidth + 'px';
  };

  componentDidMount () {
    this.setState({ status: 'data-ready' });
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('routeChange', this.onRouteChange);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('routeChange', this.onRouteChange)
  }

  componentDidUpdate (prevProps, prevState) {
    this.renderLayout()
  }


  showForm = () => {
    this.setState({ showModal: true })
  };

  onModalAction = () => {
    this.setState({ showModal: false })
  }

  renderLayout = () => {
    const { router, children } = this.props;
    const { Header, Content } = Layout;
    const { Paragraph, Text } = Typography;
    const { isMobile, showModal } = this.state;

    return (
      <Row id="root" className={styles.site} type="flex" justify="center">
        <Row className={styles.siteShadow}>{' '}</Row>
        <Layout id="siteLayout" className={classNames(styles.siteLayout, styles[styleState('siteLayout')])}>
          <Header className={styles.header}>
            <Row align="middle" type="flex">
              <Col className={styles.siteMenu}>
                <SiteMenu router={router} mobile={isMobile}/>
              </Col>
              <Col className={styles.siteLogo}>
                <img alt="SA" src={logo}/>
              </Col>
            </Row>
            <Paragraph className={classNames(styles.company, styles[styleState('company')])}>
              songer audio
            </Paragraph>
            <Paragraph className={classNames(styles.tag, styles[styleState('tag')])}>
              {!isMobile && ('For updates, please ')}
              <Text onClick={this.showForm}
                    className={styles.subscribe}>subscribe
              </Text>
            </Paragraph>
          </Header>
          <Content className={classNames(styles.content, styles[styleState('content')])}>{children}</Content>
          <Modal
            title={(<Text>SA Product Updates</Text>)}
            visible={showModal}
            onCancel={this.onModalAction}
            footer={null}
          >
            <SignUpForm onFormCancel={this.onModalAction} onFormSubmit={this.onModalAction}/>
          </Modal>
        </Layout>
      </Row>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div style={{height: '100%'}}>
        {status === 'data-ready' && this.renderLayout()}
      </div>
    )
  }
}

export default SiteLayout