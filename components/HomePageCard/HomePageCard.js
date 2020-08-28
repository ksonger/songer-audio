import paths from "../../constants/paths";
import classNames from "classnames";
import styles from "../HomePage/HomePage.module.scss";
import {Col, Row} from "antd";
import React from "react";

const HomePageCard = ({store, title, copy, cta, }) => {

  return (
    <Col onClick={() => {navigate(paths.PRODUCTS.SPEAKER)}} className={classNames(styles.ataGlance, styles[this.styleState('ataGlance')])} span={12}>
      <Row className={classNames(styles.glanceContent, styles[this.styleState('glanceContent')])}>
        <Row type="flex" justify="center" className={classNames(styles.header, styles[this.styleState('header')])}>
          The Enso Loudspeaker
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.body, styles[this.styleState('body')])}>
          Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design. It delivers true full-range sound across the frequency spectrum with breathtaking detail, imaging and transients.
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.cta, styles[this.styleState('cta')])}>
          Learn More
        </Row>
      </Row>
    </Col>
  )
}