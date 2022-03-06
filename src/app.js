// --------------Modulos
const path=require('path');
const express = require("express")
const app = express()
const methodOverride= require('method-override')
const createError = require('http-errors');
const session = require ('express-session');
const logger = require('morgan');
const cookieParser = require('cookie-parser');


const homeRouter = require("./routes/homeRoutes")
const productsRouter= require('./routes/productsRoutes')
const userRoutes= require('./routes/userRoutes')
const auth = require('./middleware/auth'); 


const port= 3030

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(auth);


app.use (session({ 
    secret: 'esto es secreto',
    resave: false,
    saveUninitialized:false
}));

//middleware  de aplicacion  --cookies
app.use(cookieParser());

app.listen(process.env.PORT||port ,()=>{
    console.log("El servidor esta corriendo en "+ port)
}
)

app.set("view engine","ejs")
app.set('views', path.join(__dirname,'./views'))

app.use("/",homeRouter)
app.use("/",productsRouter )
app.use("/users",userRoutes)

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});