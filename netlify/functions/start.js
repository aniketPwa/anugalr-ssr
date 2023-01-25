const serverless = require("serverless-http");
const { app } = require("./dist/angular.io-example/server/main");

exports.handler = serverless(app());
