const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    // instancia do express
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production' // Verifica se estÃ¡ em DEV

    // Chama os niddlewares
    this.middlewares()
    // Chama as Views
    this.views()
    // Chama as Rotas
    this.routes()
  }

  middlewares () {
    // middleware padrÃ£o para quegar os parametros do body
    this.express.use(express.urlencoded({ extended: false }))
  }

  views () {
    // config do nunjucks
    // usa path para que funcione no windows tb
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    // disponibiliza a pasta public
    this.express.use(express.static(path.resolve(__dirname, 'public')))
    // config para usar njk
    this.express.set('view engine', 'njk')
  }

  routes () {
    // chama as rotas no arquivo routes
    this.express.use(require('./routes'))
  }
}

// exporta uma instancia do express da classe App
module.exports = new App().express
