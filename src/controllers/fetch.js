const fetch = require("node-fetch");
module.exports = {
    read:(req, res) =>{
        fetch ("http://localhost:3030/")
        .then(response => response.json())
        .then(markpet => {
            res.render("markpet", {markpet})
        })
    }
}