import React from 'react'
import SiteLayout from "../../components/SiteLayout";
import Home from "../index";

class Products extends React.Component {
  state = {}

  render() {
    return (
      <div style={{color: 'white', marginTop: '100px'}}>
        Products
      </div>
    )
  }
}

Products.getLayout = (page) => {
  return (
    <SiteLayout router={page.props.router}>
      {page}
    </SiteLayout>
  )
}

export default Products