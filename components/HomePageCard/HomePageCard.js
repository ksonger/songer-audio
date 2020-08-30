import classNames from "classnames";
import styles from "../HomePage/HomePage.module.scss";
import {Col, Row} from "antd";
import React from "react";
import {mobile, styleState} from '../../utils/formFactor'

const HomePageCard = ({ card, breakpoint }) => {

  const {title, copy, cta, path} = card

  const navigate = (path) => {
    const { router } = this.props
    router.push(path)
  }

  const cardContent = () => (
      <Row className={classNames(styles.glanceContent, styles[styleState('glanceContent')])}>
        <Row type="flex" justify="center" className={classNames(styles.header, styles[styleState('header', breakpoint)])}>
          {title}
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.body, styles[styleState('body', breakpoint)])}>
          {copy}
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.cta, styles[styleState('cta', breakpoint)])}>
          {cta}
        </Row>
      </Row>
    )

  return (
    <>
      {!mobile(breakpoint) && (
        <Col onClick={() => {navigate(path)}} className={classNames(styles.ataGlance, styles[styleState('ataGlance', breakpoint)])} span={12}>
          {cardContent()}
        </Col>
      )}
      {mobile(breakpoint) && (
        <Row onClick={() => {navigate(path)}} className={classNames(styles.ataGlance, styles[styleState('ataGlance', breakpoint)])} span={12}>
          {cardContent()}
        </Row>
      )}
    </>
  )
}

export default HomePageCard