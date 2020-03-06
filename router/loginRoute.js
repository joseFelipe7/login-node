const express = require('express');
const router = express.Router();
/**controlador do login */
const loginControler = require(`../controller/loginController`);
/**Rotas */
router.get('/',loginControler.index);
router.post('/logar',loginControler.logar);

module.exports = router;