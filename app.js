require('dotenv').config()
const express = require('express'),
      app = express(),
      port = process.env.PORT,
      path = require('path'),
      // bodyParser = require('body-parser')
      routes = require('./routes/route')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('views', './views')
app.set('view engine', 'pug')

routes(app)

app.listen(port, () =>
	console.log(`Server started on port ${port}`));
