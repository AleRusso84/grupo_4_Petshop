function guestMiddleware (req, res, next){
    if (req.session.user) {
        // Lo dejamos pasar
        
        res.redirect('/users/profile');
    } else {
        next();
    }




  //  if (req.session.userLogged){
  //      return res.redirect ('/users/detail')
  //  }
  //  next();
}

module.exports = guestMiddleware;