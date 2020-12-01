import classNames from "classnames";
import styles from "../HomePage/HomePage.module.scss";
import {connect} from 'react-redux'
import {Col, Row} from "antd";
import React from "react";
import {mobile, styleState} from '../../utils/formFactor'
import PropTypes from 'prop-types'

let ProductCard = ({ card, breakpoint, dispatch }) => {

  const { title } = card


  const cardContent = () => (
    <Row className={classNames(styles.glanceContent, styles[styleState('glanceContent')])}>
      <Row type="flex" justify="center" className={classNames(styles.header, styles[styleState('header', breakpoint)])}>
        {title}
      </Row>
    </Row>
  )

  return (
    <Col style={{position: 'relative'}} span={24}>
      <Row style={{position: 'absolute', width: '100%', maxWidth: '960px'}} className={classNames(styles.ataGlance, styles[styleState('ataGlance', breakpoint)])}>
        {cardContent()}
      </Row>
    </Col>
  )
}

ProductCard.propTypes = {
  card: PropTypes.object.isRequired,
  breakpoint: PropTypes.string.isRequired
}

ProductCard = connect()(ProductCard)

export default ProductCard