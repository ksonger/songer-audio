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
  aboutCopy = () => {
    const { Paragraph } = Typography;
    return (
      <Row>
        <Col span={24}>
          <Row className={classNames(styles.aboutCopy, styles[this.styleState('aboutCopy')])}>
            <Row className={styles.desktopRow}>
              <Typography>
                <Paragraph className={classNames(styles.aboutHeader, styles[this.styleState('aboutHeader')])}>
                  Design & Materials
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[this.styleState('aboutSubheader')])}>
                  Field Coils
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Unlike a typical loudspeaker driver, Songer Audio uses powerful electromagnets called field coils to produce a magnetic field, rather than a permanent magnet. There are some good reasons for that design decision.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Practically speaking, the tolerances of the magnetic gap and voice coil in our drivers is smaller than it is in a typical driver. With that in mind, the ability to remove the influence of the magnetic field during driver assembly is helpful for accuracy.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  More importantly however, the nature and quality of an electromagnetic field is unlike that of a permanent magnetic field, and is the superior choice for sound reproduction. A permanent magnetic field has comparatively low permeability and is elastic, much like a trampoline. In an electromagnet however the permeability, or 'stiffness' of the magnetic field is typically hundreds if not thousands of times higher. This means that when the voice coil is excited by a signal in that field, it can be moved very precisely in space, and returned similarly to a resting state.  The result is incredibly accurate, low-distortion sound reproduction.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Lastly, the uniform density of the magnetic field in an electromagnet is more constant as the voice coil moves within it, such that the voice coil draws less upon the magnetic field adversely affecting flux density in the gap.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[this.styleState('aboutSubheader')])}>
                  Cones and Voice Coils
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Like a select few other field coil loudspeaker producers, Songer Audio uses treated Hosho washi paper as a cone material, as well as for our voice coil formers. While it's subjective, we feel that the natural lifelike sound produced by mulberry fiber paper simply can't be matched.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Unlike others however, Songer Audio hand forms curvilinear cones in our drivers instead of straight cones.  This allows them to be remarkably thin and light, while maintaining excellent radial stiffness and durability, and producing sound over a very broad frequency range.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[this.styleState('aboutSubheader')])}>
                  Suspension
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Leather has been used as a surround materials for decades, for it's long-lasting durability and excellent sonic characteristics. We use the lightest and thinnest of lambskin leather for the surrounds of our drivers.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Our spider assembly is a patented, highly innovative design. Composed of thermal polyurethane matrix and a light carbon fiber co-polyester composite collar, it holds the moving mass in light tension and further reduces the already feather-weight 14 gram load upon the field and voice coils.  The result is extraordinary sensitivity and detail.
                </Paragraph>
              </Typography>
            </Row>
          </Row>
          {this.mobile() && (
            <Row>
              <div className={classNames(styles.portrait, styles[this.styleState('portrait')])}>
                <Image img="ken.jpg"/>
              </div>
            </Row>
          )}
          <Row className={classNames(styles.aboutCopy, styles[this.styleState('aboutCopy')])}>
            <Row className={styles.desktopRow}>
              <Typography>
                <Paragraph className={classNames(styles.aboutHeader, styles[this.styleState('aboutHeader')])}>
                  Songer Audio
                </Paragraph>
                {!this.mobile() && (
                  <Image className={styles.desktopPortrait} img="ken.jpg"/>
                )}
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Songer Audio is the product of my lifelong passion. It is the sum of thousands of hours of design and redesign, of refinement and production, and of an obsessive drive to perfect the joyful experience of music.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  I bought my first pair of loudspeakers when I was 18 years old; it was a nice pair of bookshelf speakers.  Most people would have treated them with care, but I was much too curious for that. I felt compelled to discover how they worked inside, and what I could do to make them even better.  I cracked them open, I ported them, I altered the suspension of the mid-range driver, I replaced the crossover with a better one... Both before and after, they never did sound great honestly.  But I learned a lot, and loved experimenting with them.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  I never thought I'd turn that hobby into something more, but after over 20 years in the software industry I found myself turning increasingly back to loudspeaker research and design as a creative outlet.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  I started what has become Songer Audio designing and building cabinets, in my free time ten years ago.  I love the sound of full-range drivers, and spent countless evenings and weekends making enclosures for them. These were the first speakers I'd designed using proper software, and having discovered how impressive the results could be I was absolutely hooked by it.  My creations started filling up our house and eventually, friends began suggesting that I try to sell them.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                   Designing and building cabinets for commercial drivers was satisfying, but I often wondered if I couldn't take my work further to design and build a complete, world-class loudspeaker by hand.  My search for the answer to that question is an ongoing and rewarding journey, marked with success and challenge, and always full of discovery.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  In March of 2018 I finally left the software industry to devote myself entirely to loudspeaker design, my true passion.
                </Paragraph>
              </Typography>
            </Row>
          </Row>
        </Col>
      </Row>
    )
  }

  renderAbout = () => {
    return (
      <Animated>
        <Row className={classNames(styles.aboutMain, styles[this.styleState('aboutMain')])}>
          {(
            this.aboutCopy()
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
