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
                  Unlike a typical loudspeaker driver, Songer Audio uses powerful electromagnets to produce a magnetic field rather than a permanent magnet. There are some good reasons for that design choice.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Practically speaking, the tolerances of the magnetic gap and voice coil in our drivers is smaller than it is in a typical driver. With that in mind, the ability to remove the influence of the magnetic field during driver assembly is useful for accuracy.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Most importantly however, is the nature and quality of the magnetic field produced by an electromagnetic field coil. A permanent magnetic field has comparatively low permeability and is elastic, much like a trampoline. In an electromagnet however, the permeability of the magnetic field is typically hundreds if not thousands of times higher than any permanent magnet. That highly permeable field is extremely stiff, and when a voice coil is excited within it can be moved to a very precise point in space, and subsequently returned to an equally precise resting state.  The result is remarkably accurate sound reproduction.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Lastly, the uniform density of the magnetic field in a field coil is constant as the voice coil moves within it. Conversely, the magnetic field of a moving voice coil draws on the field of a permanent magnet, adversely affecting flux density.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[this.styleState('aboutSubheader')])}>
                  Cones and Voice Coils
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Like a select few other field coil loudspeaker producers, Songer Audio uses treated Hosho washi paper as a cone material, as well as for our voice coil formers. While it is subjective, we feel that the natural, lifelike sound produced by the mulberry fiber material simply cannot be matched.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Unlike other producers however, Songer Audio hand forms curvilinear cones in our drivers, instead of straight cones.  This allows the use of remarkably thin and light cones, while maintaining excellent radial stiffness and durability, along with a broad frequency range of low-distortion reproduction.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[this.styleState('aboutSubheader')])}>
                  Suspension
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Leather has been used as a surround materials for decades, for it's long-lasting durability and excellent sonic characteristics. We use the lightest and thinnest of lambskin leather for the surrounds of our drivers.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  Our spider assembly is a patented, highly innovative design. Composed of thermal polyurethane matrix and a light carbon fiber co-polyester composite collar, it holds the moving mass in light tension and even further reduces the already feather-weight 14 gram load acted upon by the field and voice coils.  The result of this design is extraordinary sensitivity and detail.
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
                  I bought my first pair of loudspeakers when I was 18 years old, a pair of basic bookshelf speakers.  Most people would have treated them with great care, but I was too curious for that. I felt compelled to discover how they worked inside, and what could make them even better.  I cracked them open, I ported them, I altered the suspension of the mid-range driver, I replaced the crossover with a better one... and they never did sound very great, honestly.  But I thoroughly loved experimenting with and improving them.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  I never thought I'd turn that hobby into a business.  After over 20 years in the software industry however, I found myself turning increasingly back to loudspeaker research and design as a creative outlet.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  I started what has become Songer Audio by designing and building cabinets, in my free time almost ten years ago.  I love the sound of point-source full-range drivers, and spent countless evenings and weekends making enclosures for them. These were the first speakers I'd designed using proper software, and having discovered how impressive a result could be achieved I was absolutely hooked by it.  My creations started filling up our house and eventually, friends began suggesting that I try to sell what I was making.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  However, just building speaker cabinets wasn't enough for me. I couldn't stop wondering if it was possible for a single individual to design and build a world-class loudspeaker, entirely by hand.  My search for the answer has been a truly rewarding journey, marked with success and challenge, and always of discovery.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[this.styleState('aboutText')])}>
                  In March of 2018 I left the software industry, so that I could devote myself entirely to loudspeaker design, my true passion.
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
