// const cdk = require('@aws-cdk/core');
const widget_service = require("../lib/widget_service");
const { Stack } = require("aws-cdk-lib");
// const { Construct } = require('constructs');
// const sqs = require('aws-cdk-lib/aws-sqs');
class MyapiStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new widget_service.WidgetService(this, "Widgets");
  }
}

module.exports = { MyapiStack };

/* 
This code uses callbacks to handle asynchronous function responses.
It currently demonstrates using an async-await pattern. 
AWS supports both the async-await and promises patterns.
For more information, see the following: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/calling-services-asynchronously.html
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html 
*/
