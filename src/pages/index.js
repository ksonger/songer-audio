import React from "react"
import _ from 'lodash'
import {Row, Col, Typography} from 'antd'
import Animated from 'components/Animated'
import Image from "../components/image"
import responsive from 'constants/responsive'
import { navigate, withPrefix } from 'gatsby'
import paths from 'constants/paths'
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
    p1: `Songer Audio field coil loudspeakers and drivers are functional works of art, of uncompromising craftsmanship.  Each piece is 100% designed, made and assembled by hand. Our products express a philosophy of simplicity, excellence, and a relentless dedication to provide the purest possible experience of music.`,
    p2: `The Songer Audio 10-inch field coil driver is the product of years of research, innovation & development.  Japanese washi cones and voice coil formers produce beautiful tone and accuracy.  Italian lambskin surrounds offer superb transients.  The elegant brass and aluminum frame dissipates excess heat, and an innovative, carbon fiber and thermal polyurethane spider suspension delivers breathtaking sensitivity and detail.`,
    p3: "Our furniture grade cabinetry is entirely made from solid hardwood, well-braced and minimally damped for a natural sounding, musical listening experience.",
    p4: "The end result is something that must be experienced to be believed.  Each detail of musical recordings is effortlessly revealed. Every instrument is in it's place, surrounded by air and full of life. Voices are rich, expressive and accurate. In a word, the result is art."
  }

  homeCopy = () => {
    const { Paragraph } = Typography;

    return (
      <>
        <Row className={styles.desktopRow}>
          <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
            {this.copy.header}
          </Paragraph>
          <p className={classNames(styles.homeText, styles[this.styleState('homeText')])}>
            {this.copy.p1}
          </p>
        </Row>
      </>
    )

  }

  renderHome = () => {
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[this.styleState('homeMain')])}>
          <Row style={{ 'height': '100%' }}>
            <Col style={{ 'height': '100%' }} span={24}>
              <Image className={classNames(styles.homeBackground, styles[this.styleState('homeBackground')])}
                     img="home_background.png"/>
              <Row className={classNames(styles.home, styles[this.styleState('home')])}>
                <Row className={classNames(styles.homeCopy, styles[this.styleState('homeCopy')])}>
                  {(
                    this.homeCopy()
                  )}
                </Row>
                {this.mobile() && (
                  <>
                    <Row type="flex" className={classNames(styles.ataGlance, styles[this.styleState('ataGlance')])} span={24}>
                      <Row className={classNames(styles.glanceContent, styles[this.styleState('glanceContent')])}>
                        <Row type="flex" justify="center" className={classNames(styles.header, styles[this.styleState('header')])}>
                          BR-1 Loudspeaker
                        </Row>
                        <Row type="flex" justify="center" className={classNames(styles.body, styles[this.styleState('body')])}>
                          Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design. It delivers true full-range sound across the frequency spectrum with breathtaking detail, imaging and transients.
                        </Row>
                        <Row type="flex" justify="center" className={classNames(styles.cta, styles[this.styleState('cta')])}>
                          Learn More
                        </Row>
                      </Row>
                    </Row>
                    <Row type="flex" className={classNames(styles.ataGlance, styles[this.styleState('ataGlance')])} span={24}>
                      <Row className={classNames(styles.glanceContent, styles[this.styleState('glanceContent')])}>
                        <Row type="flex" justify="center" className={classNames(styles.header, styles[this.styleState('header')])}>
                          FC-1 Field Coil Driver
                        </Row>
                        <Row type="flex" justify="center" className={classNames(styles.body, styles[this.styleState('body')])}>
                          The product of years of research and development, the Songer Audio FC-1 is hand-constructed from the finest materials, offering exceptionally lifelike musical reproduction for a variety of design applications.
                        </Row>
                        <Row type="flex" justify="center" className={classNames(styles.cta, styles[this.styleState('cta')])}>
                          Learn More
                        </Row>
                      </Row>
                    </Row>
                  </>
                )}
                {!this.mobile() && (
                <Row type="flex" justify="center">
                  <Col onClick={() => {navigate(paths.PRODUCTS.SPEAKER)}} className={classNames(styles.ataGlance, styles[this.styleState('ataGlance')])} span={12}>
                    <Row className={classNames(styles.glanceContent, styles[this.styleState('glanceContent')])}>
                      <Row type="flex" justify="center" className={classNames(styles.header, styles[this.styleState('header')])}>
                        BR-1 Loudspeaker
                      </Row>
                      <Row type="flex" justify="center" className={classNames(styles.body, styles[this.styleState('body')])}>
                        Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design. It delivers true full-range sound across the frequency spectrum with breathtaking detail, imaging and transients.
                      </Row>
                      <Row type="flex" justify="center" className={classNames(styles.cta, styles[this.styleState('cta')])}>
                        Learn More
                      </Row>
                    </Row>
                  </Col>
                  <Col onClick={() => {navigate(paths.PRODUCTS.DRIVER)}}  className={classNames(styles.ataGlance, styles[this.styleState('ataGlance')])} span={12}>
                    <Row className={classNames(styles.glanceContent, styles[this.styleState('glanceContent')])}>
                      <Row type="flex" justify="center" className={classNames(styles.header, styles[this.styleState('header')])}>
                        FC-1 Field Coil Driver
                      </Row>
                      <Row type="flex" justify="center" className={classNames(styles.body, styles[this.styleState('body')])}>
                        The product of years of research and development, the Songer Audio FC-1 is hand-constructed from the finest materials, offering exceptionally lifelike musical reproduction for a variety of design applications.
                      </Row>
                      <Row type="flex" justify="center" className={classNames(styles.cta, styles[this.styleState('cta')])}>
                        Learn More
                      </Row>
                    </Row>
                  </Col>
                </Row>
                )}
              </Row>
            </Col>
          </Row>
        </Row>
      </Animated>
    )
  };

  render () {
    const { status } = this.state;
    return (
      <div style={{ "height": "100%" }}>
        {status === 'data-ready' && this.renderHome()}
      </div>
    )
  }
}

export default IndexPage
