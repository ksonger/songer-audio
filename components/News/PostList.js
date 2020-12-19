import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Col, List, Row, Spin, Icon} from 'antd'
import moment from 'moment';
import {truncate} from '../../utils/utilities';
import styles from './Posts.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";
import PostContainer from "./PostContainer";
import {router, searchToObject} from "../../utils/navigation";

export const TRUNCATION_LIMIT = 150;

class PostList extends PureComponent {
  state = {
    breakpoint: 'sm',
    view: 'list',
    id: null,
    slug: null
  }

  init = async() => {
    const q = searchToObject()
    let bPost = false
    if(q.id && q.post) {
      await this.setState({id: q.id, slug: q.post})
      bPost = true
    }
    return bPost
  }

  componentDidMount () {
    const { fetchNewsPosts } = this.props;
    fetchNewsPosts()
    this.init().then((hasPost) => {
      if(hasPost) {
        this.setState({view: 'post'})
      }
    })
  }

  selectPost = (slug, id) => {
    this.setState({slug: slug, id: id, view: 'post'})
  }

  selectList = () => {
    this.setState({view: 'list'})
    router().push('/news/')
  }

  render () {
    const { isLoading, newsposts } = this.props;
    const antIcon = <Icon type="loading" style={{ fontSize: 36 }} spin/>
    const { breakpoint, view, slug, id } = this.state

    return (
      <Row>
        <Col>
          {view === 'post' && slug && id && (
            <PostContainer navHandler={this.selectList} id={id} slug={slug}/>
          )}
          {view === 'list' && (
            <Col>
              {/* posts */}
              {newsposts.map(({ id, title, summary, createdAt, slug }, index) => (
                <List className={classNames(styles.newsFeed, styles[styleState('newsFeed', breakpoint)])} key={index}>
                  <List.Item key={index}>
                    <Col onClick={() => {
                      this.selectPost(slug, id)
                    }}>
                      <Row className={classNames(styles.listItem, styles[styleState('listItem', breakpoint)])}>
                        <article style={{ lineHeight: 1.35 }}>
                          <h2>
                            <strong>{title}</strong>
                          </h2>
                          <p>{truncate(summary, TRUNCATION_LIMIT)}&hellip;</p>
                          <div style={{ textAlign: 'right' }}>
                            <time dateTime={createdAt}>{moment(createdAt).fromNow()}</time>
                          </div>
                        </article>
                      </Row>
                    </Col>
                  </List.Item>
                </List>
              ))}

              {/* progress */}
              {isLoading && (
                <div style={{ textAlign: 'center' }}>
                  <Spin indicator={antIcon}/>
                </div>
              )}
            </Col>
          )}

        </Col>
      </Row>
    );
  }
}

PostList.propTypes = {
  fetchNewsPosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  newsposts: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      id: PropTypes.string,
      slug: PropTypes.string,
      summary: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}

export default PostList
