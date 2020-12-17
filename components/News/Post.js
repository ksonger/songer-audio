import React, {PureComponent} from 'react';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Button, Col, Row, Spin, Icon} from 'antd'
import styles from './Posts.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";
import Link from "next/link";

class Post extends PureComponent {

  state = {
    breakpoint: 'sm'
  }

  componentDidMount () {
    const { fetchNewsPost, id, newspost } = this.props;
    if (!newspost) {
      fetchNewsPost(id);
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
    const { breakpoint } = this.state
    return (
      <Col>
        <Row className={classNames(styles.postNav, styles[styleState('postNav', breakpoint)])}>
          <Link href="/news">
            <Row>
              <Button className={classNames(styles.navButton, styles[styleState('navButton', breakpoint)])}
                      type="primary" shape="round" icon="caret-left" size="small">
                News
              </Button>
            </Row>
          </Link>
        </Row>
        <Row align="bottom" className={classNames(styles.postHeader, styles[styleState('postHeader', breakpoint)])}>
          <Col className={classNames(styles.postTitle, styles[styleState('postTitle', breakpoint)])} span={20}>
            {title}
          </Col>
          <Col className={classNames(styles.postDate, styles[styleState('postDate', breakpoint)])}>
            <time dateTime={createdAt}>{moment(createdAt).fromNow()}</time>
          </Col>
        </Row>
        <Row>
          {content && (
            ReactHtmlParser(content)
          )}
        </Row>
        {images && images.length > 0 && (
          images.map((image, index) => (
              <div className={classNames(styles.postImage, styles[styleState('postImage', breakpoint)])} key={index}>
                <img key={index} src={image}/>
              </div>
            )
          ))}
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
