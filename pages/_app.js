import React from 'react'
import {router as setRouter} from "../utils/navigation";
import Amplify from "aws-amplify";
import awsMobile from "../src/aws-exports";

Amplify.configure(awsMobile)

export default function App({ Component, pageProps, router }) {
  setRouter(router)
  pageProps.initialReduxState = pageProps.initialReduxState || {}

  return (

        <Component {...pageProps} />

  )
}