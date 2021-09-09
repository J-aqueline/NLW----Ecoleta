import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    //json

    response.json( [
        'Robson',
        'Claudio',
        'Ana'
    ] );//
});

app.listen(3333); 
