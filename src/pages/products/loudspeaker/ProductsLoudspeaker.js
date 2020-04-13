import React from "react"
import _ from 'lodash'
import {Row, Col, List, Modal, Typography} from 'antd'
import Animated from 'components/Animated'
import Image from "components/image"
import SignUpForm from "components/SignUpForm"
import responsive from 'constants/responsive'

import styles from '../Products.module.scss'
import classNames from "classnames";


class ProductsPageLoudspeaker extends React.Component {

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
    header: { loudspeaker: `The Enso Field Coil Loudspeaker` }
  }

  homeCopy = () => {
    const { Paragraph, Text } = Typography;
    const data = {
      'loudspeaker':
        [
          { title: 'System:', description: 'Point source full-range ported loudspeaker' },
          { title: 'Frequency Response:', description: '35Hz - 15,000Hz' },
          { title: 'Efficiency:', description: '92 dB SPL (2.83 V/1m)' },
          { title: 'Dimensions:', description: '(W x H x D) 15 x 47 x 20 in' },
          { title: 'Materials:', description: 'Hardwood (cherry shown), Leather, Brass' },
          { title: 'Weight:', description: '110 lbs' },
          { title: 'Connections:', description: '5-way binding posts, XLR power' },
        ],
    };
    return (
      <>
        {this.mobile() && (

          <>
            <Row>
              <div className={classNames(styles.speaker, styles[this.styleState('speaker')])}>
                <Image img="prod_loudspeaker_web.png"/>
              </div>
            </Row>
            <Paragraph className={classNames(styles.homeHeaderDriver, styles[this.styleState('homeHeaderDriver')])}>
              {this.copy.header.loudspeaker}
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
              dataSource={data.loudspeaker}
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
              <Paragraph style={{margin: '36px 20px 0 0', color: 'rgba(255,255,255,0.65)'}}>
                Price: $27,900
              </Paragraph>
            </Row>
          </>
        )}
        {!this.mobile() && (
          <>
            <Row className={styles.desktopRow}>
              <Paragraph className={classNames(styles.homeHeader, styles[this.styleState('homeHeader')])}>
                {this.copy.header.loudspeaker}
              </Paragraph>

              <Row type="flex" justify="center" align="middle">
                <Col span={9}>
                  <List
                    size="small"
                    style={{
                      fontSize: '11px',
                      marginTop: '-35%',
                      marginRight: '-65px',
                      marginLeft: '0',
                      color: 'rgba(255,255,255,0.65)'
                    }}
                    header={null}
                    footer={null}
                    bordered
                    dataSource={data.loudspeaker}
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
                    <Paragraph style={{margin: '36px 20px 0 0', color: 'rgba(255,255,255,0.65)'}}>
                      Price: $27,900
                    </Paragraph>
                  </Row>
                </Col>
                <Col span={15}>
                  <div className={classNames(styles.speaker, styles[this.styleState('speaker')])}>
                    <Image img="prod_loudspeaker_web.png"/>
                  </div>
                </Col>
              </Row>
            </Row>
          </>
        )}
      </>
    )
  }

  renderHome = () => {
    const { showModal } = this.state;
    const { Text, Paragraph } = Typography;
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
          <Row className={classNames(styles.responses, styles[this.styleState('responses')])}>
            <Col>
              <Paragraph className={classNames(styles.responseLabel, styles[this.styleState('responseLabel')])}>
                <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ lineHeight: '24px' }}>Frequency & Impulse Response <br/></span>
                </span> (Vector average of 20-600Hz nearfield response, & 400-20,000Hz spatially averaged 30&deg; window @ 7ft)
              </Paragraph>
              <Row className={classNames(styles.response, styles[this.styleState('response')])}>
                <Image img="final_production_spl_fr.png"/>
              </Row>
              <Paragraph className={classNames(styles.responseLabel, styles[this.styleState('responseLabel')])}>
                <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ lineHeight: '24px' }}>Total Harmonic Distortion <br/></span>
                </span> (Measured at 1m)
              </Paragraph>
              <Row className={classNames(styles.response, styles[this.styleState('response')])}>
                <Image img="final_production_thd_1m.png"/>
              </Row>
            </Col>
          </Row>
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

export default ProductsPageLoudspeaker
