const followerConnection = require('../followerConnection');

//This adds the current user to the
exports.add_follower = function(req, res) {
  const userObject = req.body;
  console.log(userObject);
  followerConnection.query('CALL ?? (?,?)', ['AddFollowers', userObject.userId,
      userObject.followerId
    ], (err, data) => {
      console.log(err);
      console.log(data);
    })
    // const userId = req.params.userId;
    // followerConection.query('', (err, data) => {
    //
    // })
}

//get followers for a specific user id
exports.get_followers = function(req, res) {
  const userId = req.params.userId;
  //SQLI Vulnerability
  followerConnection.query(
    'select followers_list from followers.subscribers where user_id =' +
    userId, (err, data) => {
      if (!err) {
        res.send(data[0]);
      } else {
        res.send(500);
      }
    });
}
