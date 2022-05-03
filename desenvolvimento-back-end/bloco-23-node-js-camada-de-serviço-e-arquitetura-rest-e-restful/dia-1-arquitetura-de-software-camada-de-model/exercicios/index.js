const express = require('express');
const app = express();
const PORT = 3000;

app.post('/user', (req, res) => {
    res.send('Post');
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));