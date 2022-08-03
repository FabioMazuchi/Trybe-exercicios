import express from 'express';
import frameRouter from './routes/FrameRouter';

const app = express();
app.use(express.json());
app.use(frameRouter);

export default app;