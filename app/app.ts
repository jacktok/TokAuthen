import express = require('express');
import path = require('path')
import indexRouter = require('./routes/index');


const app = express();

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '../public')));



app.use('/', indexRouter);
app.use('/t', function(req, res){
    res.send()
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function() {
    console.log("app listen on port 3000");
})