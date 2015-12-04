import React from "react"
import Router, { Route } from 'react-router'
import Main from "./main"
import Page from "./components/page"

export default (
  <Route path="/" handler={Main}>
    <Route path="/" handler={Page} />
  </Route>
)
