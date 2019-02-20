const express = require('express')

// pega uma instancia do Router
const routes = express.Router()

routes.get('/', (req, res) => {
  res.render('auth/signup')
})

// exporta as rotas
module.exports = routes
