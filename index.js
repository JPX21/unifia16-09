    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3000;

    //use o body parser para processar 
app.use(bodyParser.json());

app.get('/', (req , res) => {
    res.send('duvido tu da um /login ali na url');
})

app.get('/login', (req , res) => {
    res.send('caraca, tens coragem ein B)');
})

app.listen(port, ()=>{
    console.log('O servidor está rodando em http://localhost:${port}')
});