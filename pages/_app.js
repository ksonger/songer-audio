import {Provider } from 'react-redux'
import { useStore } from '../store/store'
import SiteLayoutContainer from "../components/SiteLayout/SiteLayoutContainer";
import {router as setRouter} from "../utils/navigation";

import '../styles/app.scss'
import {useEffect} from "react";
import {getMenu} from "../actions/actions";

export default function App({ Component, pageProps, router }) {
  setRouter(router)
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    store.dispatch(getMenu())
  }, [store.dispatch])

  return (
    <Provider store={store}>
      <SiteLayoutContainer store={store}>
        <Component store={store} {...pageProps} />
      </SiteLayoutContainer>
    </Provider>
  )
}