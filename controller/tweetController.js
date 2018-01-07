const db = require('../dbconnection');
const redis = require("redis"),
  client = redis.createClient();
const amqp = require('amqplib');



exports.tweet_post = function(req, res) {

  //move this to another function
  let message = req.body;
  message.post_timestamp = new Date().getTime();
  amqp.connect('amqp://localhost').then((conn) => {
    return conn.createChannel().then((channel) => {
      var ok = channel.assertQueue('hello', {
        durable: false
      });
      return ok.then(() => {
        // channel.sendToQueue('hello', Buffer.from('hello'));
        channel.publish('', 'hello', Buffer.from(JSON.stringify(
          message)));
        res.send(201);
        return channel.close();
      });
    }).finally(() => {
      conn.close();
    });
  }).catch(() => {
    res.send(500);
    console.warn;
  });
}

exports.tweet_get_timeline = function(req, res) {
  db.query(
    'select post_text as tweet from posts order by post_timestamp DESC', (
      err, data) => {
      if (!err) {
        client.lrange('user:2', 0, -1, (error, tweets) => {
          //tweets.forEach((i)=>{console.log(i.tweet)});
          //let result = data.concat(tweets.);
          let result = data.concat(tweets.map((tweet) => {
            const tweetObject = JSON.parse(tweet);
            return {
              "tweet": tweetObject.post
            }
          }));
          res.send(200, result);
        })


      } else {
        res.send(500);
      }
    });

}
