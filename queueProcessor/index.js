const amqp = require('amqplib');
const messageProcessor = require('./core/messageRouter')
amqp.connect('amqp://localhost').then((conn) => {
  process.once('SIGINT', function() {
    conn.close();
  });
  return conn.createChannel().then((ch) => {
    let ok = ch.assertQueue('hello', {
      durable: false
    });
    ok = ok.then((_qok) => {
      return ch.consume('hello', (msg) => {
        //call the actual methods
        messageProcessor.processMessages(msg.content);
        //  console.log(JSON.parse(msg.content.toString()));
      }, {
        noAck: true
      });
    });

  })

}).catch(console.warn);
