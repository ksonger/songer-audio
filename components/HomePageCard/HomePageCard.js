import classNames from "classnames";
import styles from "../HomePage/HomePage.module.scss";
import {connect} from 'react-redux'
import {Col, Row} from "antd";
import React from "react";
import {mobile, styleState} from '../../utils/formFactor'
import {navigate} from "../../utils/navigation";
import PropTypes from 'prop-types'
import {setMenuItemActive} from "../../actions/actions";

let HomePageCard = ({ card, breakpoint, dispatch }) => {

  const {title, copy, cta, path} = card

  const clickAction = (p) => {
    dispatch(setMenuItemActive({
      id: p.eventKey,
      label: p.children,
      path: p.path
    }))
    navigate(path)
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
        <Col onClick={() => {clickAction(card)}} className={classNames(styles.ataGlance, styles[styleState('ataGlance', breakpoint)])} span={12}>
          {cardContent()}
        </Col>
      )}
      {mobile(breakpoint) && (
        <Row onClick={() => {clickAction(card)}} className={classNames(styles.ataGlance, styles[styleState('ataGlance', breakpoint)])} span={12}>
          {cardContent()}
        </Row>
      )}
    </>
  )
}

HomePageCard.propTypes = {
  card: PropTypes.object.isRequired,
  breakpoint: PropTypes.string.isRequired
}

HomePageCard = connect()(HomePageCard)

export default HomePageCard