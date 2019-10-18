const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


const routes = express.Router();
const upload = multer(uploadConfig);

// rota do usuário
// req.query - Acessar query params(filtros)
// req.params = Acessar route params(para edição, delete)
// req.body = Acessa os dados do corpo da requisição(create, edit)
routes.post('/sessions', SessionController.store);

// para mais imagens - trocar single por array
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/spots',  SpotController.index);


// exportando as rotas
module.exports = routes;