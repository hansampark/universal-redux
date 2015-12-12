import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import i18n from 'i18n-abide'
import React from 'react'
import ReactDOM from 'react-dom/server'
import HTML from './views/html'

const server = express()
const router = server.Router
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, '../public')

server.use(express.static(PUBLIC_PATH))
server.use(i18n.abide({
  supported_languages: ['en_US', 'de'],
  default_lang: 'en_US',
  debug_lang: 'en_US',
  translation_directory: 'i18n'
}));
server.use((req, res) => {
  console.log(res.locals.lang, res.locals.lang_dir)
  const { lang, lang_dir } = res.locals
  const head = {

  }
  const styles = [
    <link key="normalize" rel="stylesheet" href="" />
  ]
  const scripts = [
    <script key="main" type="text/javascript" src="/main.js" charSet="utf-8"></script>
  ]
  res.send('<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(
    <HTML lang={lang} dir={lang_dir} head={head} styles={styles} scripts={scripts}>
      <h1>Test</h1>
    </HTML>
  ))
})

export default server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
