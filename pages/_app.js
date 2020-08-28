import {Provider, useDispatch} from 'react-redux'
import { useStore } from '../store/store'
import SiteLayout from "../components/SiteLayout";

import '../styles/app.scss'
import {useEffect} from "react";
import {getMenu} from "../actions/actions";

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    store.dispatch(getMenu())
  }, [store.dispatch])

  return (
    <Provider store={store}>
      <SiteLayout router={router} store={store}>
        <Component router={router} store={store} {...pageProps} />
      </SiteLayout>
    </Provider>
  )
}