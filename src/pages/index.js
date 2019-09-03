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

  /**
   * Returns form factor boolean according to breakpoint
   * @returns {boolean}
   */
  mobile = () => {
    return window.innerWidth <= responsive.BREAKPOINTS[this.state.breakpoint]
  };

  renderHome = () => {
    const { Paragraph } = Typography;
    const styleState = (element) => {
      return this.mobile() ? `${element}--mobile` : `${element}--desktop`
    }
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[styleState('homeMain')])}>
          {this.mobile() && (
            <Col span={24}>
              <Row>
                <div className={classNames(styles.driver, styles[styleState('driver')])}>
                  <Image img="driver_web.png"/>
                </div>
              </Row>
              <Row style={{ background: '#fff', marginTop: '-40%' }}>
                <Paragraph className={styles.homeHeader}>
                  Our Work
                </Paragraph>
                <Paragraph className={styles.homeText}>
                  Songer Audio field coil loudspeakers & drivers are above all things,
                  nothing less than functional, beautiful works of art. Each piece we
                  produce is 100% designed and made in house by an individual craftsman,
                  painstakingly and entirely by by hand.
                </Paragraph>
                <Paragraph className={styles.homeText}>
                  At the heart of our sound is the SA-FC10 field coil driver, driven by
                  a powerful 33-pound hand-wound electromagnet which produces 1.7 Tesla
                  of magnetic flux.
                </Paragraph>
                <Paragraph className={styles.homeText}>
                  The hand-made frame is constructed of aluminum and brass,  and runs the length of the
                  electromagnet.  Acting as a heat-sync, it wicks unwanted excess thermal energy away
                  from the field coil magnet.
                </Paragraph>
              </Row>
            </Col>
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
