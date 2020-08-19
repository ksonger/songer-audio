import React from 'react'
import Amplify, {API} from "aws-amplify";

import awsMobile from '../src/aws-exports'
import classNames from 'classnames'
import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import styles from './index.module.scss'
import {getMenuItemList, listMenuItemLists} from "../src/graphql/queries";
import {graphqlOperation} from "@aws-amplify/api-graphql";

Amplify.configure(awsMobile);

const Home = ({menuitems}) => {
  console.log(menuitems);
    return <div className={styles.home} />
  }

export default Home

export const getServerSideProps = async() => {
  let result;

  try {
    result = await API.graphql(graphqlOperation(listMenuItemLists))
  } catch(err) {
    console.warn(err)
    return {
      props: {
        menuitems: []
      }
    }
  }
  if(result.errors) {
    console.warn("Failed to fetch menu items. ", result.errors)
    return {
      props: {
        menuitems: []
      }
    }
  }
  if(result.data)  {
    return {
      props: {
        menuitems: result.data.listMenuItemLists.items
      }
    }
  }
}