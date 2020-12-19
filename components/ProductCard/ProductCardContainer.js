import {connect} from 'react-redux'
import ProductCard from "./ProductCard";


const mapDispatchToProps = (dispatch) => ({
  clickAction: (p) => {

  },
})

const ProductCardContainer = connect(null, mapDispatchToProps)(ProductCard)

export default ProductCardContainer