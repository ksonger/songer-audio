import _ from 'lodash'
import Amplify from "aws-amplify";
import awsMobile from './src/aws-exports'
import React from "react"
import SiteLayout from 'components/SiteLayout'

Amplify.configure(awsMobile);


export const onRouteUpdate = (path) => {

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
