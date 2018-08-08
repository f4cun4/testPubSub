// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub();

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const subscriptionName = 'my-new-subscription';
const subscription = pubsub.subscription(subscriptionName);
const timeout = 60;

  
// Create an event handler to handle messages
let messageCount = 0;
const messageHandler = message => {
  console.log(`Mensaje recibido ${message.id}:`);
  console.log(`\tDatos: ${message.data}`);
  console.log(`\tAtributos: ${message.attributes}`);
  messageCount += 1;

  // "Ack" (acknowledge receipt of) the message
  message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);
setTimeout(() => {
  subscription.removeListener('message', messageHandler);
  console.log(`${messageCount} message(s) received.`);
}, timeout * 1000);
  
  
//const subscription = pubsub.subscription(subscriptionName);

