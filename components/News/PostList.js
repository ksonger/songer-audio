import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Col, List, Row, Spin, Icon} from 'antd'
import Link from 'next/link'
import moment from 'moment';
import {truncate} from '../../utils/utilities';
import styles from './Posts.module.scss'
import classNames from "classnames";
import {styleState} from "../../utils/formFactor";

export const TRUNCATION_LIMIT = 150;

class PostList extends PureComponent {
  state = {
    breakpoint: 'sm'
  }

  componentDidMount () {
    const { fetchNewsPosts } = this.props;
    fetchNewsPosts();
  }

  render () {
    const { isLoading, newsposts } = this.props;
    const antIcon = <Icon type="loading" style={{ fontSize: 36 }} spin/>
    const { breakpoint } = this.state

    return (
      <Row>
        <Col>
          {/* posts */}
          {newsposts.map(({ id, title, summary, createdAt, slug }, index) => (
            <List className={classNames(styles.newsFeed, styles[styleState('newsFeed', breakpoint)])} key={index}>
              <List.Item key={index}>
                <Link href="/news/[id]/[slug]" as={`/news/${id}/${slug}`}>
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
                </Link>
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
