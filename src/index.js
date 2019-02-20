const server = require('./server')

// usa a porta 3000 ou a que foi passada no config
server.listen(process.env.PORT || 3000)
