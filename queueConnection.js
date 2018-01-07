const amqp = require('amqplib');
//default
const connection = amqp.connect('amqp://localhost');

module.exports = connection;
