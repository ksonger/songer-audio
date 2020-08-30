import classNames from "classnames";
import styles from "../HomePage/HomePage.module.scss";
import {Col, Row} from "antd";
import React, {useState} from "react";
import responsive from "../../constants/responsive";

const HomePageCard = ({store, title, copy, cta, path}) => {

  const [breakpoint] = useState('sm')

  const navigate = (path) => {
    const {router} = this.props
    router.push(path)
  }

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  const mobile = () => {
    return window.innerWidth <= responsive.BREAKPOINTS[breakpoint]
  };

  const styleState = (element) => {
    return mobile() ? `${element}--mobile` : `${element}--desktop`
  }

  return (
    <Col onClick={() => {navigate(path)}} className={classNames(styles.ataGlance, styles[styleState('ataGlance')])} span={12}>
      <Row className={classNames(styles.glanceContent, styles[styleState('glanceContent')])}>
        <Row type="flex" justify="center" className={classNames(styles.header, styles[styleState('header')])}>
          {title}
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.body, styles[styleState('body')])}>
          {copy}
        </Row>
        <Row type="flex" justify="center" className={classNames(styles.cta, styles[styleState('cta')])}>
          {cta}
        </Row>
      </Row>
    </Col>
  )
}

export default HomePageCard