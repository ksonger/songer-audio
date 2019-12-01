import _ from 'lodash'
import React from "react"
import {Button, Dropdown, Icon, Row, Col, Layout, Typography, Menu, Modal} from 'antd'
import classNames from 'classnames'
import {navigate} from 'gatsby'
import SEO from "components/seo"
import SignUpForm from 'components/SignUpForm'
import paths from 'constants/paths'
import responsive from 'constants/responsive'
import Image from "../image";
import appStyles from 'styles/app.scss' // eslint-disable-line no-unused-vars
import styles from './SiteLayout.module.scss'


class SiteLayout extends React.Component {

  state = {
    breakpoint: 'sm',
    isMobile: false,
    point: null,
    showModal: false,
    loading: false
  };

  /**
   * Update table data per display form factor
   */
  onWindowResize = () => {
    const { breakpoint } = this.state;
    const windowWidth = window.innerWidth;
    let bp = ''
    _.forEach(_.keys(responsive.BREAKPOINTS), (key) => {
      if (windowWidth > responsive.BREAKPOINTS[key]) {
        bp = key
      }
    })
    const debounced = _.debounce(
      () => {
        this.setState({ isMobile: windowWidth < responsive.BREAKPOINTS[breakpoint], point: bp })
      },
      200,
      false
    )
    debounced()
  }

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  mobile = () => {
    return window.innerWidth <= responsive.BREAKPOINTS[this.state.breakpoint]
  };

  onRouteChange = (event) => {
    this.activeMenuItem(event.detail.path())
  };

  componentDidMount () {
    const gatsbyRoot = document.querySelector('#___gatsby');
    const nodes = gatsbyRoot.querySelectorAll('div');
    gatsbyRoot.style.height = '100%';
    nodes[0].style.height = 'inherit';
    nodes[1].style.height = 'inherit';
    this.setState({ status: 'data-ready' });
    this.activeMenuItem()
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('routeChange', this.onRouteChange)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('routeChange', this.onRouteChange)
  }

  activeMenuItem = (path) => {
    const pathName = path || window.location.pathname;
    const menuPaths = [
      { pth: paths.HOME, txt: 'home' },
      { pth: paths.PRODUCTS.SPEAKER, txt: 'loudspeakers' },
      { pth: paths.PRODUCTS.DRIVER, txt: 'drivers' },
      { pth: paths.ABOUT, txt: 'about' },
      { pth: paths.CONTACT, txt: 'contact' }
    ];
    menuPaths.forEach((menuPath, index) => {
      if (pathName === menuPath.pth) {
        this.setState({ menuActiveItem: [index.toString()], menuActiveLabel: menuPath.txt })
      }
    })
  };

  componentDidUpdate () {
    this.renderLayout()
  }

  /**
   * Handle menu item selection
   * @param item {Menu.Item}
   */
  appMenuSelect = (item) => {
    const { path } = item.item.props;
    navigate(path)
    this.activeMenuItem(path)

  }

  styleState = (element) => {
    return this.mobile() ? `${element}--mobile` : `${element}--desktop`
  }

  mobileMenu = (
    <Menu
      id="appMenu"
      className={classNames(styles.menu, styles[this.styleState('menu')])}
      theme="light"

      onClick={this.appMenuSelect}
    >
      <Menu.Item key="m0" path={paths.HOME}>
        home
      </Menu.Item>
      <Menu.Item key="m1" path={paths.PRODUCTS.SPEAKER}>
        loudspeakers
      </Menu.Item>
      <Menu.Item key="m2" path={paths.PRODUCTS.DRIVER}>
        drivers
      </Menu.Item>
      <Menu.Item key="m3" path={paths.ABOUT}>
        about
      </Menu.Item>
      <Menu.Item key="m4" path={paths.CONTACT}>
        contact
      </Menu.Item>
    </Menu>
  )


  showForm = () => {
    this.setState({ showModal: true })
  };

  onCancel = () => {
    this.setState({ showModal: false })
  }

  onSubmit = () => {
    this.setState({ showModal: false })
  }

  renderLayout = () => {
    const { children } = this.props;
    const { Header, Content } = Layout;
    const { Paragraph, Text } = Typography;
    const { menuActiveItem, menuActiveLabel, showModal } = this.state;

    return (

      <Row className={styles.site} type="flex" justify="center">
        <Row className={styles.siteShadow}>{' '}</Row>
        <Layout className={classNames(styles.siteLayout, styles[this.styleState('siteLayout')])}>
          <SEO title="Songer Audio"/>
          <Header className={styles.header}>
            <Row align="middle" type="flex">
              <Col className={styles.siteMenu}>
                {this.mobile() && (
                  <Dropdown overlay={this.mobileMenu} placement="bottomCenter" trigger={['click']}>
                    <Button className={styles.mobileNavButton}>
                      <Icon type="menu" className={styles.mobileMenuIcon}/>
                      {menuActiveLabel}
                    </Button>
                  </Dropdown>
                )}
                {!this.mobile() && (
                  <Menu
                    id="appMenu"
                    className={classNames(styles.menu, styles[this.styleState('menu')])}
                    theme="light"
                    mode='horizontal'
                    selectedKeys={menuActiveItem}
                    onClick={this.appMenuSelect}
                  >
                    <Menu.Item key="0" path={paths.HOME}>
                      home
                    </Menu.Item>
                    <Menu.Item key="1" path={paths.PRODUCTS.SPEAKER}>
                      loudspeakers
                    </Menu.Item>
                    <Menu.Item key="2" path={paths.PRODUCTS.DRIVER}>
                      drivers
                    </Menu.Item>
                    <Menu.Item key="3" path={paths.ABOUT}>
                      about
                    </Menu.Item>
                    <Menu.Item key="4" path={paths.CONTACT}>
                      contact
                    </Menu.Item>
                  </Menu>

                )}
              </Col>
              <Col className={styles.siteLogo}>
                <Image className={styles.logo} img="sa_logo_e6cc8e.png"/>
              </Col>
            </Row>
            <Paragraph className={classNames(styles.company, styles[this.styleState('company')])}>
              songer audio
            </Paragraph>
            <Paragraph className={classNames(styles.tag, styles[this.styleState('tag')])}>
              {!this.mobile() && ('For updates, please ')}<Text onClick={this.showForm} className={styles.subscribe}>subscribe</Text>
            </Paragraph>
          </Header>
          <Content className={classNames(styles.content, styles[this.styleState('content')])}>{children}</Content>
          <Modal
            title={(<Text style={{ color: 'rgba(230, 204, 142, 1)' }}>SA Product Updates</Text>)}
            visible={showModal}
            onCancel={this.onCancel}
            footer={null}
          >
            <SignUpForm onFormCancel={this.onCancel} onFormSubmit={this.onSubmit}/>
          </Modal>
        </Layout>
      </Row>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div style={{"height": "100%"}}>
        {status === 'data-ready' && this.renderLayout()}
      </div>
    )
  }
}

export default SiteLayout
