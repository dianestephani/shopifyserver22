const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// const itemList = require ('./routes/items.json');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const testAPIRouter = require('./routes/testAPI');


//Listener for testing
app.listen( () => {
  console.log('server on port 9000');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/testAPI', testAPIRouter);

//GET method to view items on the home page
app.get('/', (req, res) => {
  res.status(200).send(items)
})

//POST method to add new items to inventory list
app.post('/', (req, res) => {
  console.log(req.body);
  const newItem = req.body;
  items.push(newItem);
  res.status(201).send('creating post request')
})


//Inventory items
const items = [
  { name: 'Grey Goose', quantity: 2 }, 
  { name: 'Don Julio', quantity: 1 }
]

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
