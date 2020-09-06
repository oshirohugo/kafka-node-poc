import kafka from 'kafka-node';

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);
const payloads = [{ topic: 'test-topic', messages: 'Hello world' }];

producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
    console.log(data);
  });
});

const consumer = new kafka.Consumer(client, [{ topic: 'test-topic' }], { autoCommit: false });
consumer.on('message', function (message) {
  console.log(message.value);
});
