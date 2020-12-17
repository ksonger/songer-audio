import { connect } from 'react-redux';
import { find } from 'lodash';
import { fetchNewsPosts, setMenuItemActive } from '../../actions/actions';
import Post from './Post';

const mapStateToProps = (state, ownProps) => {
  const { id, slug } = ownProps;
  const newspost = find(state.newsposts.items, { id });
  const activePage = state.menuItems.find((el) => {
    return el.label === 'news'
  })
  return { id, newspost, slug, activePage };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsPost: (id, slug) => dispatch(fetchNewsPosts({id, slug}, 1)),
  pageLoad: (item) => {
    if(item)  {
      dispatch(setMenuItemActive(item))
    }
  }
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const PostContainer = wrapper(Post);
export default PostContainer;
