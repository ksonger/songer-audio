import React from "react"
import _ from 'lodash'
import {Row, Col, Layout, Typography} from 'antd'
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
    header: 'The medium is engineering.  The result is art.',
    p1: "Songer Audio field coil loudspeakers & drivers are functional works of fine art.  Each is created in service of a singular vision, and every component we produce to realize it is 100% designed, constructed and assembled in house, painstakingly and entirely by hand.",
    p2: "At the heart of our sound is the SA-FC10 field coil driver, powered by a 33-pound hand-wound electromagnet, producing 1.7 Tesla of magnetic flux.",
    p3: "The brass and aluminum frame of the SA-FC10 is both functional and beautiful, spanning the length of the electromagnet housing and carrying excess thermal energy away from the field coil motor.",
    p4: "Our cones, whizzers, and voice coil formers are lightweight, water resistant, and all hand-formed from Japanese Hosho washi paper. The surrounds of the the SA-FC10 are equally light and refined, molded from Italian lambskin leather. The innovative spider suspension combines carbon fiber and thermal polyurethane, and is carefully designed to be both durable and yet utterly soft and agile.",
    p5: "The end result of this labor of love is a sound that must be experienced to be believed. Each detail of musical recordings effortlessly resolves. Every instrument is in it's place, surrounded by air and full of life, and every voice textured, tonally rich, and faithfully accurate. The loudspeaker itself vanishes, and what remains is the simple emotional connection between the listener and the art form.",
    p6: "Connecting you to your music is our passion."
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
            <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p5}
            </Paragraph>
          </Typography>
          <Row type="flex" justify="center">
        <span className={classNames(styles.tagline, styles[this.styleState('tagline')])}>
      {this.copy.p6}
    </span>
          </Row>
        </>
      )
    } else {
      return (
        <>
          <Row className={styles.desktopRow}>
            <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
              {this.copy.header}
            </Paragraph>
            <span style={{ width: '30%', overflow: 'hidden', margin: 0 }}>
        <img src="driver_web_cropped.png" style={{ display: 'block', width: '50%', marginLeft: '-2%', float: 'left' }}/>
        </span>

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
            <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
              {this.copy.p5}
            </p>
          </Row>
          <Row type="flex" justify="center">
            <span className={classNames(styles.tagline, styles[this.styleState('tagline')])}>
              {this.copy.p6}
            </span>
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
                  <Image img="driver_web.png"/>
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
