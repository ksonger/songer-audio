import React from "react"
import _ from 'lodash'
import {Row, Col, List, Modal, Typography} from 'antd'
import Animated from 'components/Animated'
import Image from "components/image"
import SignUpForm from "components/SignUpForm"
import responsive from 'constants/responsive'

import styles from '../Products.module.scss'
import classNames from "classnames";


class ProductsPageDriver extends React.Component {

  state = {
    status: 'no-data',
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
    code: '',
    breakpoint: 'sm',
    isMobile: false,
    point: null,
    showModal: false
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

  showForm = () => {
    this.setState({ showModal: true })
  };

  onCancel = () => {
    this.setState({ showModal: false })
  }

  onSubmit = () => {
    this.setState({ showModal: false })
  }

  copy = {
    header: {driver: `Songer Audio FC-1 10" Field Coil Driver`}
  }

  homeCopy = () => {
    const { Paragraph, Text } = Typography;
    const data = {
      'driver':
        [
          { title: 'System:', description: '6 Ohm 1.6 Tesla Field Coil' },
          { title: 'Frequency Response:', description: '20Hz - 15,000Hz' },
          { title: 'Efficiency (12v):', description: '96.5 dB SPL (2.83 V/1m)' },
          { title: 'Impedance:', description: '9.6 Ohms' },
          { title: 'Fs:', description: '19.5 Hz' },
          { title: 'Qts (12v):', description: '0.18' },
          { title: 'Mms:', description: '14.25 grams' },
          { title: 'Inductance:', description: '.48 (mH (10k)' },
          { title: 'Vas:', description: '550 liters' },
          { title: 'Weight:', description: '33 lbs' },
        ]
    }

    if (this.mobile()) {
      return (
        <>
          <Row>
            <div className={classNames(styles.driver, styles[this.styleState('driver')])}>
              <Image img="products_driver_web.png"/>
            </div>
          </Row>
          <Paragraph className={classNames(styles.homeHeaderDriver, styles[this.styleState('homeHeaderDriver')])}>
            {this.copy.header.driver}
          </Paragraph>
          <List
            size="small"
            style={{
              fontSize: '11px',
              marginTop: '-40px',
              marginRight: '20px',
              marginLeft: '20px',
              color: 'rgba(255,255,255,0.65)'
            }}
            header={null}
            footer={null}
            bordered
            dataSource={data.driver}
            renderItem={item => (
              <List.Item>
                <Row justify="start">
                  <Col><span style={{
                    fontSize: '13px',
                    fontWeight: 600
                  }}>{item.title} </span></Col><Col> {item.description}</Col>
                </Row>
              </List.Item>
            )}
          />
          <Row type="flex" justify="center">
            <Paragraph style={{fontWeight: 'bold', margin: '20px 0 0 12px', color: 'rgba(255,255,255,0.85)'}}>Price: $9500 (pair)</Paragraph>
          </Row>
        </>
      )
    } else {
      return (
        <>
          <Row className={styles.desktopRow}>
            <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
              {this.copy.header.driver}
            </Paragraph>

            <Row type="flex" justify="center" align="middle">
              <Col span={9}>
                <List
                  size="small"
                  style={{
                    fontSize: '11px',
                    marginRight: '-25px',
                    marginLeft: '0',
                    color: 'rgba(255,255,255,0.65)'
                  }}
                  header={null}
                  footer={null}
                  bordered
                  dataSource={data.driver}
                  renderItem={item => (
                    <List.Item>
                      <Row justify="start">
                        <Col><span style={{
                          fontSize: '13px',
                          fontWeight: 600
                        }}>{item.title} </span></Col><Col> {item.description}</Col>
                      </Row>
                    </List.Item>
                  )}
                />
                <Row type="flex" justify="start">
                  <Paragraph style={{fontWeight: 'bold', margin: '20px 0 0 12px', color: 'rgba(255,255,255,0.85)'}}>Price: $9500 (pair)</Paragraph>
                </Row>
              </Col>
              <Col span={15}>
                <div className={classNames(styles.driver, styles[this.styleState('driver')])}>
                  <Image img="products_driver_web.png"/>
                </div>
              </Col>
            </Row>

          </Row>
        </>
      )
    }
  }

  renderHome = () => {
    const {showModal} = this.state;
    const {Text} = Typography;
    return (
      <Animated>
        <Row className={classNames(styles.homeMain, styles[this.styleState('homeMain')])}>
          {this.mobile() && (
            <Col span={24}>
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
        <Modal
          title={(<Text style={{ color: 'rgba(230, 204, 142, 1)' }}>SA Product Updates</Text>)}
          visible={showModal}
          onCancel={this.onCancel}
          footer={null}
        >
          <SignUpForm onFormCancel={this.onCancel} onFormSubmit={this.onSubmit}/>
        </Modal>
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

export default ProductsPageDriver
