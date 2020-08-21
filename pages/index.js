import React from 'react'
import Amplify from "aws-amplify"
import awsMobile from '../src/aws-exports'
import styles from './index.module.scss'
import SiteLayout from "../components/SiteLayout"

Amplify.configure(awsMobile)

const Home = () => {
  return <div className={styles.home}/>
}

Home.getLayout = (page) => {
  return (
    <SiteLayout router={page.props.router}>
      {page}
    </SiteLayout>
  )
}

export default Home
