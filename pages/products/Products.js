import React from 'react'
import {Col, Row, Typography} from 'antd'
import classNames from 'classnames'
import styles from './Products.module.scss'
import {styleState} from "../../utils/formFactor";
import {productCards} from '../../constants/strings'
import ProductCardContainer from "../../components/ProductCard/ProductCardContainer";
import {setProductActive} from "../../actions/actions";
import * as types from "../../constants/types";

class Products extends React.Component {

  state = {
    breakpoint: 'sm',
    activeProduct: '',
    status: 'no-data'
  }


  applyInitialState = () => {
    const { store } = this.props
    return new Promise(async(resolve) => {
      await this.setState({
        activeProduct: store.getState().activeProduct
      })
      resolve()
    })
  }

  /**
   * Handles changes to the store and updates state status
   */
  subscribeHandler = () => {
    this.applyInitialState()
      .then(() => {
        const { status } = this.state
        if(status === 'no-data')  {
          this.setState({status: 'data-ready'})
        }
      })
  }

  componentDidMount () {
    const { store } = this.props
      this.unsubscribe = store.subscribe(this.subscribeHandler)
    this.subscribeHandler()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  /**
   * Helper to show the active product and hide inactive products
   * @param item
   * @returns {string}
   */
  isActiveProduct (item) {
    const { activeProduct } = this.state
    return item === activeProduct ? 'active' : 'inactive'
  }

  /**
   * Dispatch an action to set the active product
   * @param product
   */
  dispatchActiveProduct(product) {
    const { store } = this.props
    store.dispatch(setProductActive({
      type: types.SET_ACTIVE_PRODUCT,
      activeProduct: product
    }))
  }

  renderProducts () {
    const { breakpoint } = this.state
    const { Text } = Typography
    return (
      <Col span={24} className={classNames(styles.productsMain, styles[styleState('productsMain', breakpoint)])}>
        <Row justify="center" className={classNames(styles.productsMenu, styles[styleState('productsMenu', breakpoint)])}>
          {Object.keys(productCards).map((card, index) => (
            <Text key={`p${index}`}
                  onClick={() => {
                    this.dispatchActiveProduct(productCards[card].menu)
                  }}
                  className={classNames(styles.menuItem,
                    styles[styleState('menuItem', breakpoint)],
                    styles[`menuItem---${this.isActiveProduct(productCards[card].menu)}`])}>
              {productCards[card].menu}
              {index < Object.keys(productCards).length - 1 && (
                <Text className={classNames(styles.divider, styles[styleState('divider', breakpoint)])}>|</Text>
              )}
            </Text>
          ))}
        </Row>
        <Col span={24} className={classNames(styles.desktopRow, styles[styleState('desktopRow', breakpoint)])}>
          <Row type="flex" justify="center">
            {Object.keys(productCards).map((card, index) => (
              <Col key={`c${index}`} span={24} className={classNames(styles.productCard,
                styles[styleState('productCard', breakpoint)],
                styles[`productCard---${this.isActiveProduct(productCards[card].menu)}`])}>
                <ProductCardContainer card={productCards[card]}
                                      breakpoint={breakpoint}
                                      key={index}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Col>
    )
  }

  render() {
    const { status } = this.state
    return (
      <>
        {status === 'data-ready' && this.renderProducts()}
      </>
    )
  }
}

export default Products