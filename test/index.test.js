const expect = require('chai').expect;
const tweetController = require('../controller/tweetController');


describe('First test', () => {
  it('Should assert true to be true', () => {
    return tweetController.tweet_post({}, {});
    expect(true).to.be.true;
  });
});
