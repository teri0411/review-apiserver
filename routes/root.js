'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', function (request, reply) {
    // request.params.id 하면 url도 /:id
    // request.query ?hello-world
    // request.body

    fastify.mysql.getConnection(onConnect)
  
    function onConnect (err, client) {
      if (err) return reply.send(err)
  
      client.query(
        'SELECT * FROM message', [],
        function onResult (err, result) {
          client.release()
          reply.send(err || result)
        }
      )
    }
  })
}