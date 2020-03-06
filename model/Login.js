const connection  = require('./connection');

const login = {
    logar:  (email, senha)=>{
        connection.connect();
        let query = ''
        let sql = "SELECT * FROM users WHERE email = ? AND senha = ?";
        let params = [email, senha];
         connection.query(sql,params,(err,rows,fields)=>{
            if(rows.length > 0){
                query = rows[0];
                let user = rows[0];
                console.log(`logado o usuario ${user.nome}`)
                
            }else{
                query = 0;
                console.log('n logou')
            }
        })
        connection.end();
        return query;
    }
}
module.exports = login;