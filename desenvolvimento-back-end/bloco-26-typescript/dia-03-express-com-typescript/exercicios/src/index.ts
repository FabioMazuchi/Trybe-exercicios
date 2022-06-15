import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});