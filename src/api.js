require('express-async-errors');

const express = require('express');

const generalError = require('./middlewares/generalError');
const Router = require('./routes/index.routes');
// ...

const app = express();

app.use(express.json());

app.use(Router);
app.use(generalError.handle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
