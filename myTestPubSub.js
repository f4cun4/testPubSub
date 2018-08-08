// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub();

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const subscriptionName = 'projects/myfirstdatalabproject/subscriptions/my_subscription_pubsub';
const subscription = pubsub.subscription(subscriptionName);
const timeout = 60;




  // Create an event handler to handle messages
  const messageHandler = function(message) {
    // Do something with the message
    console.log(`Message: ${message}`);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Create an event handler to handle errors
  const errorHandler = function(error) {
    // Do something with the error
    console.error(`ERROR: ${error}`);
  };

  // Listen for new messages/errors until timeout is hit
  subscription.on(`message`, messageHandler);
  subscription.on(`error`, errorHandler);
  setTimeout(() => {
    subscription.removeListener(`message`, messageHandler);
    subscription.removeListener(`error`, errorHandler);
  }, timeout * 1000);