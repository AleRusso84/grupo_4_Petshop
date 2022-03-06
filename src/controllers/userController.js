/*const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
//const { validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userLoginInfoFilePath = path.join(__dirname, '../data/userLoginInfo.json');
const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginInfoFilePath, 'utf-8'));

const userController={
	registro: (req,res)=> {
		res.render('register')
	},
	
	store: (req, res) => {


			// Creamos un nuevo usuario tomando los datos del formulario
			let newUser = {
				id: users[users.length - 1].id + 1,
				...req.body,
				image:req.file ? req.file.filename : 'default-image.png',
				category : 'user'

			};

			//encriptamos la contraseña y borramos el password para q no se guarde en nuestro json
			newUser.password = bcrypt.hashSync(req.body.password, 10);
			delete newUser.repassword


			//escribimos en nuestro archivo json
			let usersNews = [...users, newUser]
			fs.writeFileSync(userFilePath, JSON.stringify(usersNews, null, ' '));

			res.redirect('/');
		},

	login:(req,res)=>{
		res.render('login')
	},

	authenticate:(req, res)=>{

		//HACEMOS LOGICA PARA GUARDAR LOS DATOS DEL LOGIN EN UN JSON
		const { email,password } = req.body;

		
		//verifico si el mail q puso en el formulario esta en nuestra db
		let user = users.find(user => user.email ==email)

		if (user) {
			// y la contraseña es correcta...
			if (bcrypt.compareSync(password,user.password)) {
				// Eliminamos los datos sensibles y guardamos el usuario en sesión
				delete user.password;

				req.session.user = user;

				
				// Si pidió que lo recordemos
				if (req.body.remember) {
					// Generamos un token seguro, eso para que no pueda entrar cualquiera
					// https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
					const token = crypto.randomBytes(64).toString('base64');
					user.token=token
					// Lo guardamos en base, para poder chequearlo luego
		
					
					let userLoginInfo = [...usersLoginInfo, user]
					fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(userLoginInfo, null, ' '));
					
					// Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
					res.cookie('rememberToken', token, { maxAge: 1000 * 60  * 60 *  24 * 90 });                
				}

				// Finalmente lo mandamos a la home
				return res.redirect('/');
			} else {
				// Si la contraseña esta mal
				return res.render('login', { 
					old: req.body,
					errors: { 
						email: 'la contraseña es inválida'
					}
				});
			}
		} else {
			// Si el email no existe
			return res.render('login', { 
				old: req.body,
				errors: { 
					email: 'El email o la contraseña son inválidos'
				}
			});        
		}

	},
	profile: (req, res) => {
		res.render('profile');
	},
	logout: (req, res) => {
		// Borramos el registro de la base de datos si existe
		const token = usersLoginInfo.find(user => user.token = req.cookies.rememberToken);
		if (token) {
			let logerDeleter = usersLoginInfo.filter(user => user.token != req.cookies.rememberToken);
			fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(logerDeleter, null, ' '));
		}
		// Destruimos la sesión
		req.session.destroy();
		
		// Destruimos la cookie de recordar
		res.clearCookie('rememberToken');

		// Redirigimos a la home
		res.redirect('/');
	}
	
};

module.exports=userController*/

/*const { SSL_OP_NO_TLSv1_1 } = require('constants');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../data/users.json');
const bcryptjs = require('bcryptjs');


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    register: (req, res) => {
       return res.render('register');
    },
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0){
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
	   let userInDB = User.find(user => user.email ==email);
	   if (userInDB) {
		   return res.render('register', { 
			   errors: {
				   email: {
					msg: 'Este email ya está registrado'
				   }
				   
			   },
			   oldData: req.body
			});
	   }
	   let userToCreate = {
		   ...req.body,
		   password: bcryptjs.hashSync(req.body.password, 10),
		   avatar: req.file.filename
		}
		//probando let userCreated =
		let userCreated = User.create(userToCreate);
	   	return res.redirect('login');
    },   
	login: (req, res) => {
		return res.render("login");
	},
	loginProcess: (req, res) => {
		let userToLogin = User.find(user => user.email ==email);		
		if (userToLogin) {
			let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
		
			if(correctPassword){
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				// 
				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				res.send('logueado!') 
				//VER MOTIVO ERROR////////////////////////////////////////////////////////////////////////////
				return res.redirect('profile');
			
			} //saque un else {} de aqui. 
			
				return res.render('login', {
					errors: {
						email: {
							msg: 'Los datos de usuario y password no coinciden'
						}
					}
				})
			}
			if (userToLogin){
				return res.send(userToLogin)
			}		
			// res.send('no se encontro')
		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este mail en nuestra base de datos'
				}
			}
		})
	},
	profile: (req, res) => {
		return res.render("profile",{
			user: req.session.userLogged
			})
	},
	logout: (req, res) => {
		res.clearCookie('userEmail');
		res.session.destroy();
		return res.redirect('/');
	},
		
           
    // res.send('logueado!')
    //DESDE AQUI

    // Detail - Detail from one users
	detail: (req, res) => {
			let users = users.find(users=>users.id==req.params.id)
			res.render('detail')
	},

	// Create - Form to create
		create: (req, res) => {
			res.render('users');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newUsers= req.body;
		let image
		// Agrego la imagen
		if(!req.file){
			image = "3d.jpg"
		} else {
			image = req.file.filename
		}
		newUsers.image=image;
		
		
		res.send(newUsers)


		// Agrego el id al producto nuevo
		let ids = users.map(p=>p.id)
		newUsers.id = ids.length ? Math.max(...ids) + 1 : 1,
	

		// Guardo el producto nuevo en los productos
		users.push(newUsers)

		// Guardo el archivo con el nuevo producto
		let usersJson=JSON.stringify(users, null, ' ')
		fs.writeFileSync(usersFilePath,usersJson);
		res.redirect('users');
	},

	// Update - Form to edit
		edit: (req, res) => {
			let usersToEdit = users.find(users=>users.id==req.params.id)
			res.render('usersEdition',{usersToEdit})
	},
	// Update - Method to update
		update: (req, res) => {
			let id = req.params.id;
			let usersToEdit = users.find(users => users.id == id)
			let image
			if(req.file != undefined){
			image = req.file.filename
		} else {
			image = usersToEdit.image
		}

		usersToEdit = {
			id: usersToEdit.id,
			...req.body,
			image: image,
		};
		
		let newUsers = users.map(product => {
			if (users.id == usersToEdit.id) {
				return users = {...usersToEdit};
			}
			return users;
		})

		fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
		res.redirect('users');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalUsers = users.filter(users => users .id != id);
		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect('users');    
    }
}  
    module.exports = userController;*/

	const fs = require('fs');
	const path = require('path');
	const crypto = require('crypto');
	const bcrypt = require('bcryptjs')
	
	const userFilePath = path.join(__dirname, '../data/user.json');
	const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
	
	const userLoginInfoFilePath = path.join(__dirname, '../data/userLoginInfo.json');
	const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginInfoFilePath, 'utf-8'));
	
	const userController = {
	
		register: (req,res)=> {
			res.render('register')
		},
		
		store: (req, res) => {
	
	
				// Creamos un nuevo usuario tomando los datos del formulario
				let newUser = {
					id: users[users.length - 1].id + 1,
					...req.body,
					image:req.file ? req.file.filename : 'default-image.png',
					category : 'user'
	
				};
	
				//encriptamos la contrasenia y borramos el password para q noo se guarde en nuestro json
				newUser.password = bcrypt.hashSync(req.body.password, 10);
				delete newUser.repassword
	
	
				//escribimos en nuestro archivo json
				let usersNews = [...users, newUser]
				fs.writeFileSync(userFilePath, JSON.stringify(usersNews, null, ' '));
	
				res.redirect('/');
			},
	
		login:(req,res)=>{
			res.render('login')
		},
	
		authenticate:(req, res)=>{
	
			//PRIMERO Q TODO HACEMOS LOGICA PARA GUARDAR LOS DATOS DEL LOGIN EN UN JSON
			const { email,password } = req.body;
	
			
			//verifico si el mail q puso en el formulario esta en nuestra db
			let user = users.find(user => user.email ==email)
	
			if (user) {
				// y la contraseña es correcta...
				if (bcrypt.compareSync(password,user.password)) {
					// Eliminamos los datos sensibles y guardamos el usuario en sesión
					delete user.password;
	
					req.session.user = user;
	
					
					// Si pidió que lo recordemos
					if (req.body.remember) {
						// Generamos un token seguro, eso para que no pueda entrar cualquiera
						// https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
						const token = crypto.randomBytes(64).toString('base64');
						user.token=token
						// Lo guardamos en base, para poder chequearlo luego
			
						
						let userLoginInfo = [...usersLoginInfo, user]
						fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(userLoginInfo, null, ' '));
						
						// Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
						res.cookie('rememberToken', token, { maxAge: 1000 * 60  * 60 *  24 * 90 });                
					}
	
					// Finalmente lo mandamos a la home
					return res.redirect('/');
				} else {
					// Si la contraseña esta mal
					return res.render('login', { 
						old: req.body,
						errors: { 
							email: 'la contraseña son inválidos'
						}
					});
				}
			} else {
				// Si el email no existe
				return res.render('login', { 
					old: req.body,
					errors: { 
						email: 'El email o la contraseña son inválidos'
					}
				});        
			}
	
		},
		profile: (req, res) => {
			res.render('profile');
		},
		logout: (req, res) => {
			// Borramos el registro de la base de datos si existe
			const token = usersLoginInfo.find(user => user.token = req.cookies.rememberToken);
			if (token) {
				let logerDeleter = usersLoginInfo.filter(user => user.token != req.cookies.rememberToken);
				fs.writeFileSync(userLoginInfoFilePath, JSON.stringify(logerDeleter, null, ' '));
			}
			// Destruimos la sesión
			req.session.destroy();
			
			// Destruimos la cookie de recordar
			res.clearCookie('rememberToken');
	
			// Redirigimos a la home
			res.redirect('/');
		}
		
	};
	
	module.exports = userController;