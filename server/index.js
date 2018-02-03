const restify = require('restify');

const tweetController = require('../controller/tweetController');
const followerController = require('../controller/followerController');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

/**
 * @api {get} /tweet Show User TimeLine
 * @apiName GetTimeLine
 * @apiGroup Tweet
 *
 * @apiParam {id} integer User's unique id.
 *
 * @apiSuccess {String[]} post Tweets in the User's timeline.
 * @apiSuccessExample {String[]} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "post": "Tweet 1"
 *     },
 *     {
 *       "post": "Tweet 2"
 *     }]
 *
 */
server.get('/tweet', tweetController.tweet_get_timeline);

/**
 * @api {post} /tweet Post User Tweets
 * @apiName Post Tweet
 * @apiGroup Tweet
 *
 * @apiParam {post} string Users post.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
 */
server.post('/tweet', tweetController.tweet_post);
/**
 * @api {post} /follow Follow a specific user
 * @apiName AddFollower
 * @apiGroup Follow
 *
 * @apiParam {userId} id Users unique ID.
 * @apiParam {followerId} id Unique ID of to be followed user.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 */
server.post('/follow', followerController.add_follower);
/**
 * @api {get} /follow Show List Of Followers
 * @apiName GetFollower
 * @apiGroup Follow
 *
 * @apiParam {userId} id Users unique ID.
 *
 * @apiSuccess {Object[]} users  Followers of the User
 * @apiSuccessExample {Object[]} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "userID": "1",
 *          "userName":"@john"
 *     },
 *     {
 *       "userID": "2",
 *      "userName":"@linda"
 *     }]
 */
server.get('/follow/:userId', followerController.get_followers);

server.listen(8080);
module.exports = server
