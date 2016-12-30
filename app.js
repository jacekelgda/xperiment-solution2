var express = require('express')
var request = require('request')
var app = express()

app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'pug')
app.set('views', '/app/views')

app.get('/', function (req, res) {
  request(process.env.API_ENDPOINT, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.render('index', { code: body})
  } else {
    res.send('Error')
  }
})
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
