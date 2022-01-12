// const AWS = require("aws-sdk");


// exports.main = async function (event, context) {
//   try {
//     var method = event.httpMethod;
//     // Get name, if present

//     if (method === "GET") {
//       // GET / to get the names of all widgets
//       if (event.path === "/") {
//         const data = "Hello World";
//         var body = {
//           widgets: data.Contents.map(function (e) {
//             return e.Key;
//           }),
//         };
//         return {
//           statusCode: 200,
//           headers: {},
//           body: JSON.stringify(body),
//         };
//       }
//     }
//     return {
//       statusCode: 400,
//       headers: {},
//       body: "We only accept GET, POST, and DELETE, not " + method,
//     };
//   } catch (error) {
//     var body = error.stack || JSON.stringify(error, null, 2);
//     return {
//       statusCode: 400,
//       headers: {},
//       body: body,
//     };
//   }
// };


const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const bucketName = process.env.BUCKET;

exports.main = async function(event, context) {
  try {
    var method = event.httpMethod;

    if (method === "GET") {
      if (event.path === "/") {
        const data = await S3.listObjectsV2({ Bucket: bucketName }).promise();
        var body = {
          widgets: data.Contents.map(function(e) { return e.Key })
        };
        return {
          statusCode: 200,
          headers: {},
          body: JSON.stringify(body)
        };
      }
    }

    // We only accept GET for now
    return {
      statusCode: 400,
      headers: {},
      body: "We only accept GET /"
    };
  } catch(error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
        headers: {},
        body: JSON.stringify(body)
    }
  }
}