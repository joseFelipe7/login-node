const login = {
    //renderiza a tela de login
    index:(req, res)=>{
        res.render('login');
    },
    //realiza o login do usuario
    logar:(req, res)=>{
        //implementar login
        res.send('logou o/')
    }
}
module.exports = login;