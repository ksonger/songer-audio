import React from "react"
import {Row, Col, Typography} from 'antd'
import Animated from '../Animated/Animated'
import {homeCopy, homePageCards} from '../../constants/strings'
import styles from './HomePage.module.scss'
import classNames from "classnames";
import home_background from "../../images/home_background.png";
import HomePageCard from "../HomePageCard/HomePageCard";
import {styleState} from "../../utils/formFactor";

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
    this.setState({ status: 'data-ready' })
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => {
      this.setState({isMobile: store.getState().mobile})
    })
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
    const {breakpoint} = this.state
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[styleState('homeMain', breakpoint)])}>
          <Row>
            <Col span={24}>
              <img className={classNames(styles.homeBackground, styles[styleState('homeBackground', breakpoint)])}
                   alt="Onimaru" src={home_background}/>
              <Row className={classNames(styles.home, styles[styleState('home', breakpoint)])}>
                <Row className={classNames(styles.homeCopy, styles[styleState('homeCopy', breakpoint)])}>
                  {(
                    this.homeCopy()
                  )}
                </Row>
                  <Row type="flex" justify="center">
                    {Object.keys(homePageCards).map((card, index) => (
                      <HomePageCard card={homePageCards[card]}
                                    breakpoint={breakpoint}
                                    key={index}
                      />
                    ))}
                  </Row>

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