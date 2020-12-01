import React from "react"
import {Row, Col, Typography} from 'antd'
import Animated from '../../components/Animated/Animated'
import responsive from '../../constants/responsive'
import ken from "../../images/ken.jpg";
import styles from './About.module.scss'
import {styleState} from "../../utils/formFactor";
import classNames from "classnames";


class AboutPage extends React.Component {

  state = {
    status: 'no-data',
    breakpoint: 'sm',
    isMobile: false,
    point: null
  };

  componentDidMount () {
    const { store } = this.props
    this.setState({ status: 'data-ready' })
    this.unsubscribe = store.subscribe(() => {
      this.setState({isMobile: store.getState().mobile})
    })
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
    const {breakpoint} = this.state
    return (
      <Row>
        <Col span={24}>
          <Row className={classNames(styles.aboutCopy, styles[styleState('aboutCopy', breakpoint)])}>
            <Row className={styles.desktopRow}>
              <Typography>
                <Paragraph className={classNames(styles.aboutHeader, styles[styleState('aboutHeader', breakpoint)])}>
                  Design & Materials
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[styleState('aboutSubheader', breakpoint)])}>
                  Field Coils
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Unlike a typical loudspeaker driver, Songer Audio uses powerful electromagnets called field coils to produce a magnetic field, rather than a permanent magnet. There are some good reasons for that design decision.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Practically speaking, the tolerances of the magnetic gap and voice coil in our drivers is smaller than it is in a typical driver. With that in mind, the ability to remove the influence of the magnetic field during driver assembly is helpful for accuracy.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  More importantly however, the nature and quality of an electromagnetic field is unlike that of a permanent magnet, and is the better choice for sound reproduction. A permanent magnetic field has comparatively low permeability and is elastic, much like a trampoline. In an electromagnet however the permeability, or 'stiffness' of the magnetic field is typically hundreds if not thousands of times higher. This means that when the voice coil is excited by a signal in that field, it is moved very precisely in space, and returned similarly precisely to a resting state.  The result is incredibly accurate, low-distortion sound reproduction.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Lastly, the uniform density of the magnetic field in an electromagnet is more constant as the voice coil moves within it, such that the voice coil draws less upon the magnetic field adversely affecting flux density in the gap.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[styleState('aboutSubheader', breakpoint)])}>
                  Cones and Voice Coils
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Like a select few other field coil loudspeaker producers, Songer Audio uses treated Hosho washi paper as a cone material, as well as for our voice coil formers. While it's subjective, we feel that the natural lifelike sound produced by mulberry fiber paper can't be matched.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Unlike others, Songer Audio hand forms curvilinear cones for our drivers instead of straight cones.  This allows for them to be remarkably thin and light, while maintaining excellent radial stiffness and durability, and producing sound over a very broad frequency range.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutSubheader, styles[styleState('aboutSubheader', breakpoint)])}>
                  Suspension
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Leather has been used as a surround materials for decades, for it's long-lasting durability and excellent sonic characteristics. We use the lightest and thinnest of lambskin leather for the surrounds of our drivers.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Our spider assembly is a patented, highly innovative design. Composed of thermal polyurethane matrix and a light carbon fiber co-polyester composite collar, it holds the moving mass in light tension and further reduces the already feather-weight 14 gram load upon the field and voice coils.  The results is music with extraordinary dynamics and detail.
                </Paragraph>
              </Typography>
            </Row>
          </Row>
          {this.mobile() && (
            <Row>
              <div className={classNames(styles.portrait, styles[styleState('portrait', breakpoint)])}>
                <img alt="Ken Songer" src={ken}/>
              </div>
            </Row>
          )}
          <Row className={classNames(styles.aboutCopy, styles[styleState('aboutCopy', breakpoint)])}>
            <Row className={styles.desktopRow}>
              <Typography>
                <Paragraph className={classNames(styles.aboutHeader, styles[styleState('aboutHeader', breakpoint)])}>
                  Songer Audio
                </Paragraph>
                {!this.mobile() && (
                  <img className={classNames(styles.desktopPortrait)}
                       alt="Ken Songer" src={ken}/>
                )}
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Songer Audio is the product of my lifelong passion. It is the sum of thousands of hours of design and redesign, of refinement and production, and of an obsessive drive to perfect the joyful experience of music.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  I bought my first pair of loudspeakers when I was 18 years old; it was a nice pair of bookshelf speakers.  Most people would have treated them with care, but I was much too curious for that. I felt compelled to discover how they worked inside, and what I could do to make them even better.  I cracked them open, I ported them, I altered the suspension of the mid-range driver, I replaced the crossover with a better one... Both before and after, they never did sound great honestly.  But I learned a lot, and loved experimenting with them.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  I never thought I'd turn that hobby into something more, but after over 20 years in the software industry I found myself turning increasingly back to loudspeaker research and design as a creative outlet.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  I started what has become Songer Audio designing and building cabinets, in my free time ten years ago.  I love the sound of full-range drivers, and spent countless evenings and weekends making enclosures for them. These were the first speakers I'd designed using proper software, and having discovered how impressive the results could be I was absolutely hooked by it.  My creations started filling up our house and eventually, friends began suggesting that I try to sell them.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
                  Designing and building cabinets for commercial drivers was satisfying, but I often wondered if I couldn't take my work further to design and build a complete, world-class loudspeaker by hand.  My search for the answer to that question is an ongoing and rewarding journey, marked with success and challenge, and always full of discovery.
                </Paragraph>
                <Paragraph className={classNames(styles.aboutText, styles[styleState('aboutText', breakpoint)])}>
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
    const {breakpoint} = this.state
    return (
      <Animated>
        <Row className={classNames(styles.aboutMain, styles[styleState('aboutMain', breakpoint)])}>
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