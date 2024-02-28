/**
  Instruksi penggunaan consumer:
    masukan file ini kedalam sebuah folder baru (nama bebas)
    kemudian lakukan beberapa langkah berikut
    $ npm init -y
    $ npm install kafkajs
    $ node consumer.js
 */
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'] // Change this to your Kafka broker's address
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic' });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

runConsumer().catch(console.error);