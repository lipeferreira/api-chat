import express from 'express';

const route = express.Router();

route.get('/', (request, response) => {
    response.send('Olá');
});



export default route;