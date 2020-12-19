import React from 'react'
import styles from './SiteMenu.module.scss'
import classNames from "classnames";
import {Button, Dropdown, Icon, Menu} from "antd";
import {getMenu} from "../../../actions/actions";

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
      const pathName = window.location.pathname.split('/').slice(0,2).join('/')
      const item = items.filter(i => i.path === pathName)[0]
      await this.setState({
        items: items
      })
      resolve(item)
    })
  }

  componentDidMount () {
    const { store } = this.props
    this.setState({
      activePage: store.getState().activePage
    })
    this.unsubscribe = store.subscribe(async() => {
      this.applyInitialState()
        .then(async(item) => {
          await this.setState({
            activePage: item
          })
          const { status } = this.state
          if(status === 'no-data')  {
            this.setState({status: 'data-ready'})
          }
        })
    })
    store.dispatch(getMenu())
  }

  componentWillUnmount () {
    clearInterval(mInt)
  }

  onMenuSelect = async(props) => {
    let { clickAction } = this.props
    const {items} = this.state
    const item = items.filter(i => i.path === props.path)[0]
    await this.setState({
      activePage: item
    })
    await this.forceUpdate()
    clickAction(props)
  }

  renderMenu () {
    let { items, activePage } = this.state
    let { mobile } = this.props

    const menu = (
      <Menu
        id="appMenu"
        className={classNames(styles.menu, styles[mobile ? 'menu--mobile' : 'menu--desktop'])}
        theme="light"
        mode={mobile ? 'vertical' : 'horizontal'}
        selectedKeys={[activePage.id]}
        onClick={async(menuitem) => {

          this.onMenuSelect(menuitem.item.props)
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