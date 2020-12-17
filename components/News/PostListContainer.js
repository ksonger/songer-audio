import { connect } from 'react-redux';
import {fetchNewsPosts, setMenuItemActive} from '../../actions/actions';
import PostList from './PostList';

const mapStateToProps = state => {
  const { newsposts: { isFetching, items } } = state;
  return {
    isLoading: isFetching,
    newsposts: items,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsPosts: () => dispatch(fetchNewsPosts()),
  pageLoad: (item) => {
    if(item)  {
      dispatch(setMenuItemActive(item))
    }
  }
});

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default PostListContainer;
