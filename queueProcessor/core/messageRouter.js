const redis = require("redis"),
    client = redis.createClient();

exports.processMessages = (message)=>{
  //check who tweeted , if its by someone with 1M + subs handle differently.
  const post_author = message.post_author;
  if(isCelebrity(post_author)){
    //directly update the db only
    //no need to update the redis db
  }
  else{
    //update the db  for the author
    //update the redis cache for his subscribers
    //move to redis redisConnection

    client.lpush('user:2',message,(err,name)=>{
      console.log('done');
    })

  }
}


const isCelebrity = (post_author)=>{
  return false;
}
