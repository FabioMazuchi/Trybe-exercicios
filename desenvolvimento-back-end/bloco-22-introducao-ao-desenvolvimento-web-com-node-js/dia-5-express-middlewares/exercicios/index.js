const express = require('express');
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');
const postsRouter = require('./routers/postsRouter');
const errors = require('./middlewares/routerNotFound');
const teamsRouter = require('./routers/teamsRouter');

const app = express();
app.use(express.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.use('/teams', teamsRouter);

app.use('*', (req, res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));

app.use(errors.routerNotFound);

app.listen(3000);