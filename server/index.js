const restify = require('restify');

const tweetController = require('../controller/tweetController');
const followerController = require('../controller/followerController');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());
//
// server.get('/hello/:name', tweetController.tweet_post);
// server.head('/hello/:name', respond);


server.get('/tweet', tweetController.tweet_get_timeline);
server.post('/tweet', tweetController.tweet_post);
server.post('/follow', followerController.add_follower);
server.get('/follow/:userId', followerController.get_followers);

server.listen(8080);
module.exports = server
