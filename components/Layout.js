
import React from 'react'

import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }
  #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: red;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 4px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #29d, 0 0 5px #29d;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #29d;
          border-left-color: #29d;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
`
Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

import { ThemeProvider } from "styled-components"
import 'firebase/auth'

const theme = {
  corona: {

  }
}


const Theme = ({ children, themeComunity }) => (
  <ThemeProvider theme={theme['corona']}>
      {children}
  </ThemeProvider>
)

const Layout = ({children, title, image, description, themeComunity, favicon}) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/vnd.microsoft.icon" href={favicon} />
        {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700i&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css?family=Arvo|Merriweather:400,700i&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website"/>
        <meta
          key="og:image"
          name="og:image"
          property="og:image"
          content={image}
        /> 
        
      </Head>
      <GlobalStyle />
      <Theme themeComunity={themeComunity}>
        {children}
      </Theme>
      
    </div>
  )
}


export default Layout