import React from 'react'
import HomePageContainer from "../components/HomePage/HomePageContainer";
import styles from './index.module.scss'

class Index extends React.Component {
  render () {
    const {store} = this.props
    return (
      <div className={styles.home}>
        <HomePageContainer store={store}/>
      </div>
    )
  }
}

export default Index