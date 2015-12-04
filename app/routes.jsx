import React from "react"
import Router, { Route } from 'react-router'
import Main from "./routes/main"
import Page from "./components/page"

export default (
  <Route path="/" handler={Main}>
    <Route path="/" handler={Page} />
  </Route>
)
