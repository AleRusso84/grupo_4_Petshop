const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const user = {
  login: (req, res) => {
    res.render("login");
  },
  authenticate: async (req, res) => {
    try {
      //recuperamos los datos ingresados por el usuario
      const { email, password } = req.body;
      // buscamos el email ingresado en la db
      let user = await db.User.findOne({ where: { email: email } });
      //si lo encuentra
      if (user) {
        // check la password
        if (bcrypt.compareSync(password, user.password)) {
          // Eliminamos la contraseña
          delete user.password;
          //Guardamos el usuario en session
          req.session.user = user;
          // Si clickea el remember
          if (req.body.remember) {
            // Generamos un token seguro, eso para que no pueda entrar cualquiera --> https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js

            const token = crypto.randomBytes(64).toString("base64");
            user.token = token;

            // Lo guardamos en db 
            let userLoginInfo = {
              token: user.token,
              userId: user.id,
            };
            await db.UserLog.create(userLoginInfo);

            // Recordamos al usuario por 3 meses       
            res.cookie("rememberToken", token, {
              maxAge: 1000 * 60 * 60 * 24 * 90,
            });
          }

          // Finalmente lo mandamos al perfil o a la pagina de administrador si es un admin
          if (req.session.user.categoryId == 2) {
            return res.redirect("admin");
          } else {
            return res.redirect("/profile");
          }
        } else {
          // Si la contraseña esta mal
          return res.render("login", {
            old: req.body,
            errors: {
              email: "La constraseña es incorrecta",
            },
          });
        }
      } else {
        // Si el email no existe
        return res.render("login", {
          old: req.body,
          errors: {
            email: "El email no existe, ingrese nuevamente su email",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (req, res) => {
    // Nos fijamos si en la base de datos tenemos un usuario con el token
    //si existe el token en cookie existe en la db
    //Si existe, lo borramos
    try {
      if (req.cookies.rememberToken) {
        await db.UserLog.destroy({
          where: { token: req.cookies.rememberToken },
          force: true,
        });
      }
      // Destruimos la sesión
      req.session.destroy();

      // Destruimos la cookie
      res.clearCookie("rememberToken");

      // Redirigimos a la home
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
    mostrarRegister: (req, res) => {
      return res.render('register');
    },
    
    saveRegister: async (req, res) => {
      const resultValidation = validationResult(req);
      
      
      if(resultValidation.errors.length > 0){
        return res.render('register',{
           errors:resultValidation.mapped(),
           oldData:req.body
         })
       } else
       {
         try{
           const newUser={
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            profileImage:req.file
            ? req.file.filename : "default-image.png",
           };
           newUser.password=bcrypt.hashSync(req.body.password,10);

           await db.User.create(newUser);

           res.redirect('/login');
         } catch (error) {

          console.log(error)
         }
        }
    },
  userProfile: (req, res) => {
    res.render("profile");
  },
  editProfile: (req, res) => {
    res.render("editProfile");
  },
};

module.exports = user;