const lambda = require("./index.js");

lambda.handler()
    .then(res => console.log(res));