'use strict'

const fp = require('fastify-plugin')
require('dotenv').config(); 

module.exports = fp(async function (fastify, opts) {
   console.log(process.env.RDS_USERNAME)
   console.log(process.env.RDS_PASSWORD)
   console.log(process.env.RDS_HOSTNAME)
   console.log(process.env.RDS_DATABASE)

   const username = process.env.RDS_USERNAME
   const password = process.env.RDS_PASSWORD
   const hostname = process.env.RDS_HOSTNAME
   const database = process.env.RDS_DATABASE

  fastify.register(require('@fastify/mysql'), {
    connectionString: `mysql://${username}:${password}@${hostname}/${database}`
  })
})


