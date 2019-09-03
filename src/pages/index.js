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
    breakpoint: 'xs',
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

  homeCopy = () => {
    const { Paragraph } = Typography;
    if(this.mobile()) {
      return (
        <Typography>
          <Paragraph className={styles.homeHeader}>
            A New Work of Art
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            Songer Audio field coil loudspeakers & drivers are created as nothing less than
            functional artworks, each made in service of a singular mission. Each component
            we produce to realize it is 100% designed, made and assembled in house by an
            individual artist, painstakingly and entirely by hand.
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            At the heart of our sound is the SA-FC10 field coil driver, driven by a powerful
            33-pound hand-wound electromagnet producing 1.7 Tesla of magnetic flux.
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            The brass and aluminum frame of the SA-FC10 is both functional and beautiful, running
            the length of the electromagnet housing and heat-syncing excess thermal energy away
            from the field coil motor.
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            Our cones, whizzers, and voice coil formers are feather-light, water resistant,
            and all hand-formed from a fine Japanese Hosho washi paper. The surrounds of
            the the SA-FC10 are equally light and refined, composed of Italian lambskin leather.
            The innovative spider suspension combines carbon fiber and thermal polyurethane,
            and is specially designed to be both durable, and yet as utterly soft and agile
            as possible.
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            The end result of this labor of love is a sound that must be experienced to be believed.
            Each detail of musical recordings cleanly resolves. Every instrument is in it's place,
            surrounded by air and full of life, every voice textured and tonally rich, and
            faithfully accurate. The loudspeaker itself vanishes, and what remains is the simple
            emotional connection between the listener and the musician.
          </Paragraph>
          <Paragraph className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            That connection between listener and music is our passion.
          </Paragraph>
        </Typography>
      )
    } else {
      return <p>
        <span style={{width: '30%', overflow: 'hidden', margin: 0}}>
        <img src="driver_web.png" style={{display: 'block', width: '100%', margin: '0 0 0 -30%', float: 'left', opacity: '0.4'}} />
        </span>
        <span className={styles.homeHeader}>
          A New Work of Art
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          Songer Audio field coil loudspeakers & drivers are created as nothing less than
          functional artworks, each made in service of a singular mission. Each component
          we produce to realize it is 100% designed, made and assembled in house by an
          individual artist, painstakingly and entirely by hand.
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          At the heart of our sound is the SA-FC10 field coil driver, driven by a powerful
          33-pound hand-wound electromagnet producing 1.7 Tesla of magnetic flux.
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          The brass and aluminum frame of the SA-FC10 is both functional and beautiful, running
          the length of the electromagnet housing and heat-syncing excess thermal energy away
          from the field coil motor.
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          Our cones, whizzers, and voice coil formers are feather-light, water resistant,
          and all hand-formed from a fine Japanese Hosho washi paper. The surrounds of
          the the SA-FC10 are equally light and refined, composed of Italian lambskin leather.
          The innovative spider suspension combines carbon fiber and thermal polyurethane,
          and is specially designed to be both durable, and yet as utterly soft and agile
          as possible.
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          The end result of this labor of love is a sound that must be experienced to be believed.
          Each detail of musical recordings cleanly resolves. Every instrument is in it's place,
          surrounded by air and full of life, every voice textured and tonally rich, and
          faithfully accurate. The loudspeaker itself vanishes, and what remains is the simple
          emotional connection between the listener and the musician.
        </span>
        <span className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
          That connection between listener and music is our passion.
        </span>
      </p>
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
