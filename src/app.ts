import express, { Application, Request, Response } from 'express';
import cros from 'cors';
import { studentRouter } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cros());

// Aplication Routes
app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
