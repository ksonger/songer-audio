import { connect } from 'react-redux';
import { fetchNewsPosts } from '../../actions/actions';
import PostList from './PostList';

const mapStateToProps = state => {
  const { newsposts: { isFetching, items } } = state;
  return {
    isLoading: isFetching,
    posts: items,
    newsposts: items,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsPosts: () => dispatch(fetchNewsPosts()),
});

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default PostListContainer;
