import React from "react";
import {router} from '../../utils/navigation'
import {getStore} from '../../store/store'
import PostContainer from "../../components/News/PostContainer";
import {fetchNewsPosts} from "../../actions/actions";
import {Col} from "antd";

class NewsPost extends React.Component {

  state = {
    status: 'no-data',
    slug: null,
    id: null
  }

  componentDidMount () {
    const r = router()
    if(getStore().getState().newsposts.items.length === 0) {
      getStore().dispatch(fetchNewsPosts())
    }
    this.unsubscribe = getStore().subscribe(() => {
      if(getStore().getState().newsposts.items.length > 0)  {
        if (r.query.post) {
          this.setState({
            id: r.query.post[0],
            slug: r.query.post[1],
            status: 'data-ready'
          })
        }
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  renderPost = () => {
    const { slug, id } = this.state;
    return <PostContainer id={id} slug={slug}/>
  };

  render () {
    const { status } = this.state;
    return (
        <Col>
          {status === 'data-ready' && this.renderPost()}
        </Col>
    )
  }
}

export default NewsPost