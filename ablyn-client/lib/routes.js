const controller = require('./controller');


module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: controller.default,
    config: {
      description: 'Gets all the notes available'
    }
  }, {
    method: 'GET',
    path: '/login',
    handler: (request, reply) => {
      reply.view('index');
    },
    config: {
      description: 'Gets all the notes available'
    }
  }, {
    method: 'GET',
    path: '/logout',
    handler: (request, reply) => {
      reply('Logout');
    },
    config: {
      description: 'Gets all the notes available'
    }
  }, {
    method: 'GET',
    path: '/{user}',
    handler: (request, reply) => {
      reply('User TimeLine');
    },
    config: {
      description: 'Gets all the notes available'
    }
  }
]
