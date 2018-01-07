const restify = require('restify');

const tweetController = require('../controller/tweetController');

const respond = (req, res, next) => {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();
server.use(restify.plugins.bodyParser());
//
// server.get('/hello/:name', tweetController.tweet_post);
// server.head('/hello/:name', respond);


server.get('/tweet', tweetController.tweet_get_timeline);
server.post('/tweet', tweetController.tweet_post);
server.listen(8080);
