import {connect} from 'react-redux'
import ProductsPage from "./ProductsPage";
import {setProductActive} from "../../actions/actions";
import * as types from "../../constants/types";

const mapStateToProps = (state) => {
  return { activeProduct: state.activeProduct };
};

const mapDispatchToProps = (dispatch) => (
  {
    clickAction: (product) => {
      dispatch(setProductActive({
        type: types.SET_ACTIVE_PRODUCT,
        activeProduct: product
      }))
    }
  }
)

const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
export default ProductsPageContainer