const express = require("express")
const app = express()
const mainRouter = require("./routes/mainRoutes")
const port= 3000

app.use(express.static("./public"))

app.set("view engine","ejs")

app.use("/", mainRouter)


app.listen(process.env.PORT||port ,()=>{
    console.log("El servidor esta corriendo en "+ port)
}
)
