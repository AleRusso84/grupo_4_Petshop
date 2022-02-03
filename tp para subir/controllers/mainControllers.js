const controller = {

 index: (req, res) =>{
     return res.render("index")
 }, 
 register: (req, res) =>{
     return res.sen("register")
 }, 
 login: (req, res )=>{
     return res.render("login")
 }

}

module.exports = controller