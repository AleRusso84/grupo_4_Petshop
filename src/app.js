// --------------Modulos
const path=require('path');
const express = require("express")
const app = express()
const methodOverride= require('method-override')
const homeRouter = require("./routes/homeRoutes")
const productsRouter= require('./routes/productsRoutes')
const userRoutes= require('./routes/userRoutes')

const port= 3030

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use(methodOverride('_method'));

app.set("view engine","ejs")
app.set('views', path.join(__dirname,'./views'))

app.use("/",homeRouter)
app.use("/",productsRouter )
app.use("/",userRoutes)


app.listen(process.env.PORT||port ,()=>{
    console.log("El servidor esta corriendo en "+ port)
}
)