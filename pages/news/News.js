import React from "react";
import PostListContainer from "../../components/News/PostListContainer";
import {Col} from 'antd'
import styles from '../../components/News/Posts.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";

class News extends React.Component {

  state = {
    breakpoint: 'sm'
  }


  render () {
    const { breakpoint } = this.state
    return (
      <Col className={classNames(styles.newsMain, styles[styleState('newsMain', breakpoint)])}>
        <PostListContainer/>
      </Col>
    )
  }
}

export default News