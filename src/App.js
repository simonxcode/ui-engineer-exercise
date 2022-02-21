import React from "react";
import { createGlobalStyle } from 'styled-components'
import People from './components/people'

const GlobalStyle = createGlobalStyle `
  body {
    font-family: Proxima Nova, Arial, Helvetica, sans-serif;
    background-color: #F9FAFB;
  }
`
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <People />
    </>
  )
};
