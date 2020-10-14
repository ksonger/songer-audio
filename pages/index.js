import React from 'react'
import Amplify from "aws-amplify"
import awsMobile from '../src/aws-exports'
import HomePage from "../components/HomePage/HomePage";

import styles from './index.module.scss'

Amplify.configure(awsMobile)

class Index extends React.Component {
  render () {
    const {store} = this.props
    return (
      <div className={styles.home}>
        <HomePage store={store}/>
      </div>
    )
  }
}

export default Index