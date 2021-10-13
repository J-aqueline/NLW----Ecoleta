import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
    console.log('Listagem de usuários');    

    response.json([
        "Diego",
        "Robsu",
        "Cleitin",
        "Jão"
    ]);
});

//json
app.listen(3333);


