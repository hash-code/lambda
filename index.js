exports.handler = async (event) => {
  // TODO implement

  let eventBody = await event.body;
  console.log('eventBody here is: ');
  console.log(eventBody);
  eventBody = JSON.parse(eventBody);
  console.log('Parsed event body');
  console.log(eventBody);

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from razorpay_payment_events from Github!'),
  };
  return response;
};
