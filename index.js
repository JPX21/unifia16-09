    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 3000;

    //use o body parser para processar 
app.use(bodyParser.json());

//dados de exemplo (substitua isso por um banco de dados)
const todos = [
    {id:1, task: "aprender a fazer objeto" },
    {id:2, task: "estudar React " },
    {id:3, task: "ser um bom analista" },
    {id:4, task: "comprar meu opala preto"},
];

app.get('/todos', (req , res) => {
    res.json(todos);
})      //puxa a variavel todos

//rota POST para adicionar uma nova tarefa
app.post('/todos', (req,res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//tudo caminho http aqui embaixo
app.get('/home', (req , res) => {
    res.send('selecione via caminho qual informação');
})

app.get('/home/abner', (req , res) => {
    res.send('testa aqui e a tela de login com os dados da pessoa');
})

app.get('/', (req , res) => {
    res.send('duvido tu da um /login ali na url');
})

app.get('/login', (req , res) => {
    res.send('caraca, tens coragem ein B)');
})

//localização do meu server = porta 3000
app.listen(port, ()=>{
    console.log('O servidor está rodando em http://localhost:${port}')
});

 