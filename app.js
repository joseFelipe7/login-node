/**modulos do projeto */
const express = require('express')
const app     = express();
/**Rotas */
const loginRoute = require('./router/loginRoute');
/**configurações */
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets'));


/**Rotas */
app.get('/', (req, res)=>{ res.render('home') })
app.use('/login', loginRoute);

/**porta e host */
app.listen(8888, 'localhost');