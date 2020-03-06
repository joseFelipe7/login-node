const mysql = require('mysql');
/**conexão com o banco de dados */
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'loginnode'
})

module.exports = connection;