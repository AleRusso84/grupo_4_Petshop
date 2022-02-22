// --------------Modulos
const path=require('path');
const express = require("express")
const app = express()
const methodOverride= require('method-override')
const homeRouter = require("./routes/homeRoutes")
const productsRouter= require('./routes/productsRoutes')
const userRoutes= require('./routes/userRoutes')
const session = require ('express-session'); 

const port= 3030

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use(methodOverride('_method'));



app.use (session({ 
    secret: 'esto es secreto',
    resave: false,
    saveUninitialized:false
}));

//middleware  de aplicacion  --cookies
//app.use(cookies());


//middleware de userlogged

//app.use(userLoggedMiddleware);

app.listen(process.env.PORT||port ,()=>{
    console.log("El servidor esta corriendo en "+ port)
}
)

app.set("view engine","ejs")
app.set('views', path.join(__dirname,'./views'))

app.use("/",homeRouter)
app.use("/",productsRouter )
app.use("/",userRoutes)