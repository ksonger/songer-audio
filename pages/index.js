import React from 'react'
import Amplify from "aws-amplify"
import awsMobile from '../src/aws-exports'
import HomePage from "../components/HomePage/HomePage";

import styles from './index.module.scss'

Amplify.configure(awsMobile)

const Index = () => {
  return (
    <div className={styles.home}>
      <HomePage />
    </div>
  )
}

export default Index