import classNames from "classnames";
import {connect} from 'react-redux'
import {Carousel, Col, List, Row, Typography} from "antd";
import React, {useEffect} from "react";
import {styleState} from '../../utils/formFactor'
import PropTypes from 'prop-types'
import _ from 'lodash'

import styles from './ProductCard.module.scss'


let ProductCard = ({ card, breakpoint }) => {

  const { title, copy, carousel, specifications, price, graphs } = card
  const { Paragraph } = Typography

  let pInt;

  useEffect(() => (
      clearInterval(pInt)
  ));

  const cardContent = () => (
    <Row className={classNames(styles.productContent, styles[styleState('productContent')])}>
      <Row type="flex" justify="center" className={classNames(styles.header, styles[styleState('header', breakpoint)])}>
        {title}
      </Row>

      <Row type="flex" justify="center" className={classNames(styles.body, styles[styleState('body', breakpoint)])}>
        {copy}
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 12 }}>
          <Carousel effect="fade"
                    ref={(el) => {
                      if (!pInt) {
                        setInterval(() => {
                          if (!_.isNull(el) && !_.isNull(el.slick)) {
                            el.slick.slickNext()
                          }
                        }, 6500)
                      }
                    }}>
            {carousel && carousel.length && (
              carousel.map((image, index) => (
                  <img alt={`carousel_image_${index}`} key={index} src={image.src}/>
                )
              ))}
          </Carousel>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 12 }}>
          <List
            size="small"
            style={{
              fontSize: '11px',
              marginTop: '60px',
              marginRight: '20px',
              marginLeft: '20px',
              color: 'rgba(255,255,255,0.65)'
            }}
            header={null}
            footer={null}
            bordered
            dataSource={specifications}
            renderItem={item => (
              <List.Item>
                <Row justify="start">
                  <Col><span style={{
                    fontSize: '13px',
                    fontWeight: 600
                  }}>{item.title} </span></Col><Col> {item.description}</Col>
                </Row>
              </List.Item>
            )}
          />
          <Row className={classNames([styles.price, styles[styleState('price', breakpoint)]])}>
            Price: {price}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          {graphs.map((graph, index) => (
            <Col key={`g${index}`}>
              <Paragraph className={classNames(styles.responseLabel, styles[styleState('responseLabel')])}>
                <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ lineHeight: '24px' }}>{graph.title} <br/></span>
                </span> {graph.description}
              </Paragraph>
              <Row className={classNames(styles.response, styles[styleState('response')])}>
                <img alt={`graph_image${index}`} src={graph.src}/>
              </Row>
            </Col>
          ))
          }
        </Col>
      </Row>
    </Row>
  )

  return (
    <Col style={{ position: 'relative' }} span={24}>
      <Row style={{ position: 'absolute', width: '100%', maxWidth: '960px' }}
           className={classNames(styles.product, styles[styleState('product', breakpoint)])}>
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