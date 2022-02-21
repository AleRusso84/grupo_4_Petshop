function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	// let emailInCookie = req.cookies.userEmail;
	// let userFromCookie =  db.User.findOne({
	// 	where: {
	// 		email: req.body.email
	// 	}
	// })

    if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		// Verificar los campos que arroja el userLogged

	}



	next();
}

module.exports = userLoggedMiddleware;