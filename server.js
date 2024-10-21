const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// iniciar o server
// yarn nodemon server.js