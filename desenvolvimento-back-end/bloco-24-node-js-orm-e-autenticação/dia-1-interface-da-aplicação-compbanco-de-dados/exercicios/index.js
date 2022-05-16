const express = require('express');
const app = express();
const booksController = require('./controllers/booksControllers');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));