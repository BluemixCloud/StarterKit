var express = require('express');
var cfenv = require('cfenv');

var app = express();

app.get('/', function (req, res) {
    // for(var i = 0; i < 1000000000; i++){
    //   Math.pow(i, i) * Math.pow(i, i);
    // }
    res.send('Hello World!');
});

var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, function() {
  console.log("server starting on ", appEnv);
});
