import React from "react"
import {Row, Col, Typography} from 'antd'
import Animated from '../Animated/Animated'
import {homeCopy, homePageCards} from '../../constants/strings'
import styles from './HomePage.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";
import HomePageCardContainer from "../HomePageCard/HomePageCardContainer";

class HomePage extends React.Component {

  state = {
    status: 'no-data',
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
    code: '',
    breakpoint: 'sm',
    isMobile: false,
  };

  componentDidMount () {
    const { mobile } = this.props
    this.setState({ isMobile: mobile, status: 'data-ready' })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { isMobile } = this.state;
    if (isMobile !== this.props.mobile) {
      this.setState({ isMobile: this.props.mobile })
    }
  }

  homeCopy = () => {
    const { Paragraph } = Typography;
    const {breakpoint} = this.state
    return (
      <>
        <Row className={styles.desktopRow}>
          <Paragraph className={classNames(styles.homeHeader, styles[styleState('homeHeader', breakpoint)])}>
            {homeCopy.header}
          </Paragraph>
          <p className={classNames(styles.homeText, styles[styleState('homeText', breakpoint)])}>
            {homeCopy.p1}
          </p>
        </Row>
      </>
    )
  }

  renderHome = () => {
    const {breakpoint, isMobile} = this.state
    const cards = () => {
      return (
        Object.keys(homePageCards).map((card, index) => (
            <HomePageCardContainer card={homePageCards[card]}
                                   breakpoint={breakpoint}
                                   key={index}
            />
          ))
      )
    }
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[styleState('homeMain', breakpoint)])}>
          <Row>
            <Col span={24}>
              <img className={classNames(styles.homeBackground, styles[styleState('homeBackground', breakpoint)])}
                   alt="Onimaru" src='/home_background.png'/>
              <Row className={classNames(styles.home, styles[styleState('home', breakpoint)])}>
                <Row className={classNames(styles.homeCopy, styles[styleState('homeCopy', breakpoint)])}>
                  {(
                    this.homeCopy()
                  )}
                </Row>
                {isMobile && (
                  <Col span={24}>
                    {cards()}
                  </Col>
                )}
                {!isMobile && (
                  <Row type="flex" justify="center">
                    {cards()}
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

export default HomePage