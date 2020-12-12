import classNames from "classnames";
import {connect} from 'react-redux'
import {Carousel, Col, List, Row, Typography} from "antd";
import React, {useState, useEffect} from "react";
import {mobile, styleState} from '../../utils/formFactor'
import PropTypes from 'prop-types'
import {technologies} from '../../constants/strings'
import _ from 'lodash'

import styles from './Technology.module.scss'


let Technology = () => {

  const [breakpoint] = useState('sm');

  const { title, copy, carousel, specifications } = technologies.onimaru
  const { Paragraph } = Typography

  let pInt;

  useEffect(() => (
    function cleanup () {
      clearInterval(pInt)
    }
  ));

  const cardContent = () => (
    <Row className={classNames(styles.techContent, styles[styleState('techContent')])}>

      <Row type="flex" justify="center" className={classNames(styles.body, styles[styleState('body', breakpoint)])}>
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
      <Row type="flex" justify="center" className={classNames(styles.header, styles[styleState('header', breakpoint)])}>
        {title}
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 12 }}>
          <List
            size="small"
            style={{
              fontSize: '11px',
              marginTop: '60px',
              marginRight: '20px',
              marginLeft: '20px',
              color: 'rgba(255,255,255,0.65)'
            }}
            header={null}
            footer={null}
            bordered
            dataSource={specifications}
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
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 12 }}>
          <Carousel effect="fade"
                    ref={(el) => {
                      if (!pInt) {
                        setInterval(() => {
                          if (!_.isNull(el) && !_.isNull(el.slick)) {
                            el.slick.slickNext()
                          }
                        }, 6500)
                      }
                    }}>
            <div className={classNames(styles.carousel, styles[styleState('carousel', breakpoint)])}>
            {carousel && carousel.length && (
              carousel.map((image, index) => (
                  <img className={classNames(styles.carouselImage, styles[styleState('carouselImage', breakpoint)])} key={index} src={image.src}/>
                )
              ))}
            </div>
          </Carousel>
        </Col>
      </Row>
    </Row>
  )

  return (
    <Col style={{ position: 'relative' }} span={24}>
      <Row style={{ position: 'absolute', width: '100%', maxWidth: '960px' }}
           className={classNames(styles.tech, styles[styleState('tech', breakpoint)])}>
        {cardContent()}
      </Row>
    </Col>
  )
}

Technology.propTypes = {
  card: PropTypes.object.isRequired,
  breakpoint: PropTypes.string.isRequired
}

Technology = connect()(Technology)

export default Technology