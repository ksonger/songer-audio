import React from 'react'

import HomePage from "../components/HomePage/HomePage";

import styles from './index.module.scss'



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