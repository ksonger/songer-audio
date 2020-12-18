import React from "react"
import {Row, Col, Typography} from 'antd'
import Animated from '../../components/Animated/Animated'
import styles from './About.module.scss'
import {styleState, mobile} from "../../utils/formFactor";
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

  componentWillUnmount () {
    this.unsubscribe()
  }

  aboutCopy = () => {
    const { Paragraph } = Typography;
    const {breakpoint} = this.state
    return (
      <Row>
        <Col span={24}>
          {mobile(breakpoint) && (
            <Row>
              <div className={classNames(styles.portrait, styles[styleState('portrait', breakpoint)])}>
                <img alt="Ken Songer" src='./ken.jpg'/>
              </div>
            </Row>
          )}
          <Row className={classNames(styles.aboutCopy, styles[styleState('aboutCopy', breakpoint)])}>
            <Row className={styles.desktopRow}>
              <Typography>
                <Paragraph className={classNames(styles.aboutHeader, styles[styleState('aboutHeader', breakpoint)])}>
                  Songer Audio
                </Paragraph>
                {!mobile(breakpoint) && (
                  <img className={classNames(styles.desktopPortrait)}
                       alt="Ken Songer" src='./ken.jpg'/>
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