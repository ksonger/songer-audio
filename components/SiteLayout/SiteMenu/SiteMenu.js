import React from 'react'
import styles from './SiteMenu.module.scss'
import classNames from "classnames";
import {Button, Dropdown, Icon, Menu} from "antd";
import {getMenu, setMenuItemActive} from "../../../actions/actions";

let mInt;

class SiteMenu extends React.Component {

  state = {
    breakpoint: '',
    activePage: {},
    items: [],
    status: 'no-data'
  }

  applyInitialState = async() => {
    const { store } = this.props
    return new Promise(async(resolve) => {
      const items = store.getState().menuItems
      const item = items.filter(i => i.path === window.location.pathname)[0]
      await this.setState({
        items: items,
        activePage: store.getState().activePage
      })
      resolve(item)
    })
  }

  componentDidMount () {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => {
      this.applyInitialState()
        .then(() => {
          const { status } = this.state
          if(status === 'no-data')  {
            this.setState({status: 'data-ready'})
          }
        })
    })
    //TODO: very unsatisfying, find a way to intercept nextjs routes
    mInt = setInterval(() => {
      const path = '/' + window.location.pathname.split('/')[1]
      if(path !== store.getState().activePage.path) {
        store.dispatch(setMenuItemActive(store.getState().menuItems.find((el) => {
          return el.path === path
        })))
      }
    }, 500)
    store.dispatch(getMenu())
  }

  componentWillUnmount () {
    clearInterval(mInt)
  }

  renderMenu () {
    let { items, activePage } = this.state
    let { mobile, clickAction } = this.props

    const menu = (
      <Menu
        id="appMenu"
        className={classNames(styles.menu, styles[mobile ? 'menu--mobile' : 'menu--desktop'])}
        theme="light"
        mode={mobile ? 'vertical' : 'horizontal'}
        selectedKeys={activePage.id}
        onClick={(menuitem) => {
          clickAction(menuitem.item.props)
        }}
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
              {activePage.label}
            </Button>
          </Dropdown>
        )}
        {!mobile && (
          menu
        )}
      </>
    )
  }

  render() {
    const { status } = this.state
    return (
      <>
        {status === 'data-ready' && this.renderMenu()}
      </>
    )
  }

}

export default SiteMenu