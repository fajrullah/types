// kafka.config.ts
import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    logLevel: logLevel.INFO,
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });

export { consumer, producer };

