import React from 'react'
import App from 'next/app'
import '../styles/app.scss'

class SongerAudio extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const getLayout = Component.getLayout || (page => page)

    return getLayout(<Component router={router} {...pageProps} />)
  }
}

export default SongerAudio