import React from 'react'
import { useRouter } from "next/router";
import styles from './SiteMenu.module.scss'
import classNames from "classnames";
import {Button, Dropdown, Icon, Menu} from "antd";
import responsive from "../../../constants/responsive";
import {fetchMenuItems} from "../../../api";

class SiteMenu extends React.Component {

  state = {
    breakpoint: '',
    menuActiveItem: [],
    menuActiveLabel: '',
    items: []
  }

  componentDidMount () {
    fetchMenuItems()
      .then(async (response) => {
        const activeItems = response.menuitems.filter((item) => item.isVisible)
        await this.setState({
          items: activeItems.sort((a, b) => a.sortOrder - b.sortOrder)
        })
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
    items = items.filter((item) => item.isVisible)
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