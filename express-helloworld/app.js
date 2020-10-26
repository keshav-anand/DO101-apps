var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This is a moon shot\n');
});

app.get('/mars', function (req,res) {
  res.send('Bonjour Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

