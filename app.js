const express = require('express')
const app     = express();

app.get('/', (req, res)=>{
    res.send('tudo supimpa')
})

app.listen(8888, 'localhost');