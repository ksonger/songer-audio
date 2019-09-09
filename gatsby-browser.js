import Amplify from "aws-amplify";
import awsMobile from './src/aws-exports'
import React from "react"
import SiteLayout from 'components/SiteLayout'

Amplify.configure(awsMobile);


export const onRouteUpdate = (path, prevPath) => {
  window.dispatchEvent(new CustomEvent('routeChange', { bubbles: false, detail: { path: () => path.location.pathname } }))
}
/**
 * Wraps application in a persistent app menu and header
 * @param element
 * @param props
 * @returns {*}
 */
export const wrapPageElement = ({element, props}) => {
    return <SiteLayout {...props}>{element}</SiteLayout>

}
