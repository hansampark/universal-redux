import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOM from 'react-dom/server'
import HTML from './components/html'

const server = express()
const router = server.Router
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, '../public')

server.use(express.static(PUBLIC_PATH))
server.use((req, res) => {
  res.send('<!doctype html>' + ReactDOM.renderToStaticMarkup(
    <HTML head={{ }} assets={{ }}>
      <h1>Test</h1>
    </HTML>
  ))
})

export default server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
