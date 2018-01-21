const controller = require('./controller');


module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: controller.default
  }, {
    method: 'GET',
    path: '/login',
    handler: controller.login
  }, {
    method: 'GET',
    path: '/register',
    handler: controller.register
  }, {
    method: 'GET',
    path: '/logout',
    handler: controller.logout
  }, {
    method: 'GET',
    path: '/{user}',
    handler: controller.timeline
  }, {
    method: 'GET',
    path: '/scripts/vendor/{param}',
    handler: {
      directory: {
        path: 'public/vendor'
      }
    }
  }, {
    method: 'GET',
    path: '/scripts/custom/{param}',
    handler: {
      directory: {
        path: 'public/custom'
      }
    }
  }, {
    method: 'GET',
    path: '/scripts/custom/templates/{param}',
    handler: {
      directory: {
        path: 'public/custom/templates'
      }
    }
  }
]
