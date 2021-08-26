#!/usr/bin/env node

const amqp = require('amqplib');

amqp.connect('amqp://guest:guest@localhost:5672', (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
    const queue = 'hello';
    const msg = 'Hello, World';
    channel.assertQueue(queue, Buffer.from(msg));
    console.log(`[x] Sent ${msg}`)
  });
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});