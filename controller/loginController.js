const login = require('../model/Login')
const loginController = {
    //renderiza a tela de login
    index:(req, res)=>{
        res.render('login');
    },
    //realiza o login do usuario
    logar:(req, res)=>{
        //implementar login
        let email = req.body.email;
        let senha = req.body.senha;
        login.logar(email,senha)
        res.send(`logou o/ ${email} ${senha}`)
    }
}
module.exports = loginController;