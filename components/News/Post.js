import React, {PureComponent} from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Button, Col, Row, Spin, Icon} from 'antd'
import styles from './Posts.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";
import {mobile} from "../../utils/formFactor";


class Post extends PureComponent {

  state = {
    breakpoint: 'sm'
  }

  componentDidMount () {
    const { fetchNewsPost, id, slug, newspost } = this.props;
    if (!newspost) {
      fetchNewsPost(id, slug);
    }
  }

  renderProgress = () => {
    const antIcon = <Icon type="loading" style={{ fontSize: 36 }} spin/>
    const { breakpoint } = this.state
    return (
      <div className={classNames(styles.progress, styles[styleState('progress', breakpoint)])}>
        <br/>
        <Spin indicator={antIcon}/>
      </div>
    );
  };

  renderPost = () => {
    const { title, createdAt, content, images } = this.props.newspost;
    const { navHandler } = this.props
    const { breakpoint } = this.state
    return (
      <Col>
        <Row className={classNames(styles.postNav, styles[styleState('postNav', breakpoint)])}>
          <Row>
            <Button onClick={() => {navHandler()}}
                    className={classNames(styles.navButton, styles[styleState('navButton', breakpoint)])}
                    type="primary" shape="round" icon="caret-left" size="small">
              Posts
            </Button>
          </Row>
        </Row>
        <Row align="bottom" className={classNames(styles.postHeader, styles[styleState('postHeader', breakpoint)])}>
          <Col className={classNames(styles.postTitle, styles[styleState('postTitle', breakpoint)])} xs={{ span: 24 }}
               sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} xxl={{ span: 20 }}>
            {title}
          </Col>
          {!mobile(breakpoint) && (
            <Col className={classNames(styles.postDate, styles[styleState('postDate', breakpoint)])}>
              <time dateTime={createdAt}>{moment(createdAt).fromNow()}</time>
            </Col>
          )}
        </Row>
        <Row>
          {content && (
            ReactHtmlParser(content)
          )}
        </Row>
        <Row justify="center">
          <Col span={24} className={classNames(styles.postImageCol, styles[styleState('postImageCol', breakpoint)])}>
            {images && images.length > 0 && (
              images.map((image, index) => (
                  <div className={classNames(styles.postImage, styles[styleState('postImage', breakpoint)])} key={index}>
                    <img alt={`post_image_${index}`}
                         className={classNames(styles.postImg, styles[styleState('postImg', breakpoint)])} key={index}
                         src={image}/>
                  </div>
                )
              ))}
          </Col>
        </Row>
      </Col>
    );
  };

  render () {
    const { breakpoint } = this.state
    return (
      <div>
        <div className={classNames(styles.postMain, styles[styleState('postMain', breakpoint)])}>
          {this.props.newspost ? this.renderPost() : this.renderProgress()}
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string,
  newspost: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.array,
  }),
  slug: PropTypes.string,
}

export default Post;
