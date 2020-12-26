import React from 'react'
import {Col, Row, Typography} from 'antd'
import classNames from 'classnames'
import styles from './Products.module.scss'
import {styleState} from "../../utils/formFactor";
import {productCards} from '../../constants/strings'
import ProductCardContainer from "../../components/ProductCard/ProductCardContainer";

class ProductsPage extends React.Component {

  state = {
    breakpoint: 'sm',
    activeProduct: '',
    status: 'no-data'
  }

  componentDidMount () {
    const { activeProduct } = this.props
    this.setState({ activeProduct, status: 'data-ready' })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { activeProduct } = this.state;
    if (activeProduct !== this.props.activeProduct) {
      this.setState({ activeProduct: this.props.activeProduct })
    }
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
    const { clickAction } = this.props
    clickAction(product)
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

export default ProductsPage