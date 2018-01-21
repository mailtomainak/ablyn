const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const server = new Hapi.Server();
const Routes = require('./lib/routes');
const Path = require('path');


server.connection({
  port: Settings.port
});

//register the views
server.register([require('vision'), require('inert')], (err) => {
  Hoek.assert(!err, err);
  server.views({
    engines: {
      html: require('handlebars')
    },
    layout: true,
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout/',
    helpersPath: './views/helpers',
    isCached: false
  })

})


server.route(Routes);

server.start((err) => {
  Hoek.assert(!err, err);

  console.log(`Server running at: ${server.info.uri}`);
});
