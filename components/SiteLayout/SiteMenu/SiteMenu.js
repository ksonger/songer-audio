import React from 'react'
import styles from './SiteMenu.module.scss'
import classNames from "classnames";
import {Button, Dropdown, Icon, Menu} from "antd";
import responsive from "../../../constants/responsive";
import {getMenu} from '../../../actions/home'


class SiteMenu extends React.Component {

  state = {
    breakpoint: '',
    menuActiveItem: [],
    menuActiveLabel: '',
    items: []
  }

  async getInitialProps({store}) {
    const items = await store.dispatch(getMenu());
    return {menuItems: items};
  }

  componentDidMount () {
    const {store} = this.props
    this.unsubscribe = store.subscribe(() => {
      this.setState({items: store.getState().menuItems})
    })
  }

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  mobile = () => {
    const { breakpoint } = this.state;
    return window.innerWidth <= responsive.BREAKPOINTS[breakpoint]
  };

  activeMenuItem = (path, label) => {
    const { items } = this.state
    const pathName = path || window.location.pathname;
    this.setState({
      menuActiveItem: [items.filter((item) => item.path === pathName)[0]['id']],
      menuActiveLabel: label
    })
  };

  /**
   * Handle menu item selection
   * @param item {Menu.Item}
   */
  appMenuSelect = (item) => {
    const { path, children } = item.item.props;
    const {router} = this.props
    router.push(path)
    this.activeMenuItem(path, children)

  }

  render () {
    let { items, menuActiveLabel } = this.state
    let { mobile } = this.props
    const menu = (
      <Menu
        id="appMenu"
        className={classNames(styles.menu, styles[mobile ? 'menu--mobile' : 'menu--desktop'])}
        theme="light"
        mode={mobile ? 'vertical' : 'horizontal'}
        selectedKeys={this.menuActiveItem}
        onClick={this.appMenuSelect}
      >
        {
          items.map((item) => (
            <Menu.Item key={item.id} path={item.path}>
              {item.label}
            </Menu.Item>
          ))
        }
      </Menu>
    )

    return (
      <>
        {mobile && (
          <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <Button className={styles.mobileNavButton}>
              <Icon type="menu" className={styles.mobileMenuIcon}/>
              {menuActiveLabel}
            </Button>
          </Dropdown>
        )}
        {!mobile && (
          menu
        )}
      </>
    )
  }
}

export default SiteMenu