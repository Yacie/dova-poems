const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const router = express.Router();
const poemsRouter = require('./routes/poems');

const app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

//connect to mongodb dova
const mongoose = require('mongoose');
mongoose.connect(process.env.VUE_APP_MONGODB_URI || 'mongodb://localhost:27017/dova', { 
		useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
	}, ()=>{
	console.log('DOVA connection has been made');
})
.catch(err => {
	console.error('App starting error:', err.stack);
	process.exit(1);
});

router.get('/', (req, res)=>{
	res.json({ message: 'API Initialized!'});
});

const port = process.env.API_PORT || 8081;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use('/poems', poemsRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(port, ()=>{//221020 pre added 'var server = '
	console.log('api running on port',port);
});

module.exports = server; //221020 added this line