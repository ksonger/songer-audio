import { connect } from 'react-redux';
import { find } from 'lodash';
import { fetchNewsPosts } from '../../actions/actions';
import Post from './Post';

const mapStateToProps = (state, ownProps) => {
  const { id, slug } = ownProps;
  const newspost = find(state.newsposts.items, { id });
  return { id, newspost, slug };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsPost: (id, slug) => dispatch(fetchNewsPosts({id, slug}, 1)),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const PostContainer = wrapper(Post);
export default PostContainer;
