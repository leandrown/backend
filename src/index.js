const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qmckx.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query (Filtros, ordenacao, paginacao, etc...)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para criacao ou alteracao de um registro)

// MongoDB (Banco nao-relacional)

app.listen(3333);
