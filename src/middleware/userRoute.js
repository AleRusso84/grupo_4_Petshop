/*const user = require("../data/users.json");

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}
module.exports = userLoggedMiddleware;*/

module.exports = (req, res, next) => {
    // Si existe el usuario en session
    if (req.session.user) {
        // Lo dejamos pasar
        
        next();
    } else {
        res.redirect('/');
    }
}