import React from "react"
import {Row, Col, Layout, Typography, Modal} from 'antd'
import classNames from 'classnames'
import SignUpForm from '../SignUpForm'
import logo from '../../images/sa_logo_e6cc8e.png'
import styles from './SiteLayout.module.scss'
import {styleState} from "../../utils/style";
import PropTypes from 'prop-types'
import {onWindowResize} from "../../utils/formFactor";
import SiteMenuContainer from "./SiteMenu/SiteMenuContainer";

class SiteLayout extends React.Component {

  state = {
    showModal: false,
    loading: false
  };

  componentDidMount () {
    this.setState({ status: 'data-ready' });
    const { formFactor } = this.props
    formFactor()
    window.addEventListener('resize', () => {
      onWindowResize(() => {
        formFactor()
      })
    })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize);
  }

  componentDidUpdate (prevProps, prevState, snaaphot) {
    this.renderLayout()
  }

  showForm = () => {
    this.setState({ showModal: true })
  };

  onModalAction = () => {
    this.setState({ showModal: false })
  }

  renderLayout = () => {
    const { children, store } = this.props;
    const { Header, Content } = Layout;
    const { Paragraph, Text } = Typography;
    const { showModal, activePage, activeLabel } = this.state;
    const mobile = store.getState().mobile

    return (
      <div className={styles.rootDiv} id="rootDiv">
        <Row id="root" className={styles.site} type="flex" justify="center">
          <Row className={styles.siteShadow}>{' '}</Row>
          <Layout id="siteLayout" className={classNames(styles.siteLayout, styles[styleState('siteLayout')])}>
            <Header className={classNames([styles.header, styles[styleState('header')]])}>
              <Row className={classNames([styles.headerRow, styles[styleState('headerRow')]])} align="middle"
                   type="flex">
                <Col className={styles.siteMenu}>
                  <SiteMenuContainer
                    store={store}
                    mobile={mobile}
                    activePage={activePage}
                    activeLabel={activeLabel}
                  />
                </Col>
                <Col className={styles.siteLogo}>
                  <img alt="SA" src={logo}/>
                </Col>
              </Row>
              <Paragraph className={classNames(styles.company, styles[styleState('company')])}>
                songer audio
              </Paragraph>
              <Paragraph className={classNames(styles.tag, styles[styleState('tag')])}>
                {!mobile && ('For updates, please ')}
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
      </div>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div style={{ height: '100%' }}>
        {status === 'data-ready' && this.renderLayout()}
      </div>
    )
  }
}

SiteLayout.propTypes = {
  store: PropTypes.object.isRequired
}

export default SiteLayout