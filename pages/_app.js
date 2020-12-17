import React from 'react'
import {Provider } from 'react-redux'
import { useStore } from '../store/store'
import SiteLayoutContainer from "../components/SiteLayout/SiteLayoutContainer";
import {router as setRouter} from "../utils/navigation";
import '../styles/app.scss'
import {useEffect} from "react";
import {getMenu} from "../actions/actions";
import Amplify from "aws-amplify";
import awsMobile from "../src/aws-exports";

Amplify.configure(awsMobile)

export default function App({ Component, pageProps, router }) {
  setRouter(router)
  pageProps.initialReduxState = pageProps.initialReduxState || {}
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    store.dispatch(getMenu())
  })

  return (
    <Provider store={store}>
      <SiteLayoutContainer store={store}>
        <Component store={store} {...pageProps} />
      </SiteLayoutContainer>
    </Provider>
  )
}