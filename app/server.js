import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import i18n from 'i18n-abide'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import HTML from './views/html'
import Layout from './routes/layout'
import Index from './routes/index'
import { routes } from './routes'

const server = express()
const router = server.Router
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, '../public')

server.use(i18n.abide({
  supported_languages: ['en_US', 'de'],
  default_lang: 'en_US',
  debug_lang: 'en_US',
  translation_directory: 'i18n'
}));
server.use('/assets', express.static(PUBLIC_PATH))
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs');

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (props) {
      console.log(res.locals.lang, res.locals.lang_dir)
      const { lang, lang_dir } = res.locals
      const head = {

      }
      const styles = [
        <link key="normalize" rel="stylesheet" href="" />
      ]
      const scripts = [
        <script key="main" type="text/javascript" src="/assets/javascripts/app.js" charSet="utf-8"></script>
      ]
      // console.log('<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(
      //   <HTML lang={lang} dir={lang_dir} head={head} styles={styles} scripts={scripts}>
      //
      //   </HTML>
      // ))

      // res.status(200).send('<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(
      //   <HTML lang={lang} dir={lang_dir} head={head} styles={styles} scripts={scripts}>
      //
      //   </HTML>
      // ))
      const markup = ReactDOM.renderToString(<RoutingContext {...props} />)
      res.status(200).render('index', { markup })
    } else {
      res.status(404).send('Not found')
    }
  })
})

export default server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
