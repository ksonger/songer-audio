import React from "react"
import _ from 'lodash'
import {Row, Col, Typography} from 'antd'
import Animated from 'components/Animated'
import Image from "components/image"
import responsive from 'constants/responsive'

import styles from './About.module.scss'
import classNames from "classnames";



class AboutPage extends React.Component {

  state = {
    status: 'no-data',
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
    header: `About Songer Audio`,
    p1: `Songer Audio is the product of my lifelong passion. It is the sum of thousands of hours of design and redesign, of refinement and production, and of an obsessive drive to perfect the joyful experience of music.`,
    p2: `I bought my first pair of loudspeakers when I was 18 years old, a pair of basic bookshelf speakers.  I suppose most people would have treated them with great care, but I was too curious for that. I felt compelled to discover how they worked inside, and what could make them even better.  I cracked them open, I ported them, I altered the suspension of the mid-range driver, I replaced the crossover with a better one... they never did sound very great, honestly.  But I thoroughly loved experimenting with and improving them.`,
    p3: `I never thought I'd turn that hobby into a business.  After over 20 years in the software industry however, I found myself turning increasingly back to loudspeaker research and design as a creative outlet.`,
    p4: `I started what has become Songer Audio by designing and building cabinets, in my free time almost ten years ago.  I love the sound of point-source full-range drivers, and spent countless evenings and weekends making enclosures for them. These were the first speakers I'd designed using proper software, and having discovered how impressive a result could be achieved I was absolutely hooked by it.  My creations started filling up our house and eventually, friends began suggesting that I try to sell what I was making.`,
    p5: `However, building speaker cabinets wasn't enough for me. I couldn't stop exploring a question - was it possible to build a world-class loudspeaker, entirely by hand?  My search for the answer has been an amazing journey, of great successes and disappointments, and of tremendous learning.`,
    p6: `In March of 2018 I left the software industry, so that I could devote myself entirely to loudspeaker design, my true passion.`,
  }

  aboutCopy = () => {
    const { Paragraph } = Typography;
    if (this.mobile()) {
      return (
        <>
          <Typography>
            <Paragraph className={classNames(styles.aboutHeader, styles[this.styleState('aboutHeader')])}>
              {this.copy.header}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p1}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p2}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p3}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p4}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p5}
            </Paragraph>
            <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p6}
            </Paragraph>
          </Typography>
        </>
      )
    } else {
      return (
        <>
          <Row className={styles.desktopRow}>
            <Paragraph className={classNames(styles.aboutHeader, styles[this.styleState('aboutHeader')])}>
              {this.copy.header}
            </Paragraph>
            <Image className={styles.desktopPortrait} img="ken.jpg"/>

            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p1}
            </p>
            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p2}
            </p>
            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p3}
            </p>
            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p4}
            </p>
            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p5}
            </p>
            <p className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
              {this.copy.p6}
            </p>
          </Row>
        </>
      )
    }
  }

  renderAbout = () => {
    return (
      <Animated>
        <Row className={classNames(styles.aboutMain, styles[this.styleState('aboutMain')])}>
          {this.mobile() && (
            <Col span={24}>
              <Row>
                <div className={classNames(styles.portrait, styles[this.styleState('portrait')])}>
                  <Image img="ken.jpg"/>
                </div>
              </Row>
              <Row className={classNames(styles.aboutCopy, styles[this.styleState('aboutCopy')])}>
                {(
                  this.aboutCopy()
                )}
              </Row>
            </Col>
          )}
          {!this.mobile() && (
            <Row>
              <Col span={24}>
                <Row className={classNames(styles.aboutCopy, styles[this.styleState('aboutCopy')])}>
                  {(
                    this.aboutCopy()
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
        {status === 'data-ready' && this.renderAbout()}
      </div>
    )
  }
}

export default AboutPage
