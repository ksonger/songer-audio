import React from "react"
import _ from 'lodash'
import {Row, Col, Typography} from 'antd'
import Animated from 'components/Animated'
import Image from "../components/image"
import responsive from 'constants/responsive'

import styles from './Index.module.scss'
import classNames from "classnames";


class IndexPage extends React.Component {

  state = {
    status: 'no-data',
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
    code: '',
    breakpoint: 'sm',
    isMobile: false,
    point: null
  };

  componentDidMount () {
    this.setState({ status: 'data-ready' })
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize)
  }

  /**
   * Update table data per display form factor
   */
  onWindowResize = () => {
    const { breakpoint } = this.state
    const windowWidth = window.innerWidth
    let bp = ''
    _.forEach(_.keys(responsive.BREAKPOINTS), (key) => {
      if (windowWidth > responsive.BREAKPOINTS[key]) {
        bp = key
      }
    })
    const debounced = _.debounce(
      () => {
        this.setState({ isMobile: windowWidth < responsive.BREAKPOINTS[breakpoint], point: bp })
      },
      200,
      false
    )
    debounced()
  }

  styleState = (element) => {
    return this.mobile() ? `${element}--mobile` : `${element}--desktop`
  }

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  mobile = () => {
    return window.innerWidth <= responsive.BREAKPOINTS[this.state.breakpoint]
  };

  copy = {
    header: `The medium is engineering. The result is art.`,
    p1: `Songer Audio loudspeakers & drivers are functional art, of uncompromising craftsmanship.  Each piece is 100% designed, made and assembled entirely by hand.`,
    p2: `Our 10-inch field coil driver is the product of years of research, innovation & development.  Carefully chosen materials are used to produce it.  Japanese washi cones and voice coil formers produce beautiful tone and accuracy.  Italian lambskin surrounds offer superb transients and attack.  The elegant brass and aluminum frames dissipate excess heat from the driver, and an innovative, carbon fiber thermal polyurethane spider suspension delivers breathtaking sensitivity and detail.`,
    p3: "Our furniture grade loudspeaker cabinetry is made from solid hardwood, simply braced and minimally damped for a natural sounding, musical listening experience.",
    p4: "The end result is something that must be experienced to be believed. Each detail of musical recordings is effortlessly revealed. Every instrument is in it's place, surrounded by air and full of life. Voices are rich, expressive and accurate. Our products express our philosophy, which is of perfectly executed simplicity and of relentless commitment to excellence.  We remove all that is inessential, and leave only a pure conduit between you and the music."
  }

  homeCopy = () => {
    const { Paragraph } = Typography;
    if (this.mobile()) {
      return (
        <>
          <Typography>
            <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
              {this.copy.header}
            </Paragraph>
            <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p1}
            </Paragraph>
            <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p2}
            </Paragraph>
            <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p3}
            </Paragraph>
            <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p4}
            </Paragraph>
          </Typography>
        </>
      )
    } else {
      return (
        <>
          <Row className={styles.desktopRow}>
            <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
              {this.copy.header}
            </Paragraph>
            <Image className={styles.desktopDriver} img="driver_web_cropped_1500.png"/>

            <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p1}
            </p>
            <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p2}
            </p>
            <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p3}
            </p>
            <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p4}
            </p>
          </Row>
        </>
      )
    }
  }

  renderHome = () => {
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[this.styleState('homeMain')])}>
          {this.mobile() && (
            <Col span={24}>
              <Row>
                <div className={classNames(styles.driver, styles[this.styleState('driver')])}>
                  <Image img="driver_web_1000.png"/>
                </div>
              </Row>
              <Row className={classNames(styles.homeCopy, styles[this.styleState('homeCopy')])}>
                {(
                  this.homeCopy()
                )}
              </Row>
            </Col>
          )}
          {!this.mobile() && (
            <Row>
              <Col span={24}>
                <Row className={classNames(styles.homeCopy, styles[this.styleState('homeCopy')])}>
                  {(
                    this.homeCopy()
                  )}
                </Row>
              </Col>
            </Row>
          )}
        </Row>
      </Animated>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div>
        {status === 'data-ready' && this.renderHome()}
      </div>
    )
  }
}

export default IndexPage
