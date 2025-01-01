import express, { Request, Response } from 'express';
import db from './src/services/data_base';

const app = express();
const PORT = process.env.port || 3000
const DB_NAME = process.env.DB_NAME || ''

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.get('/data', (req: Request, res: Response) => {
  const response = db.getAllItems(DB_NAME)
  res.send(response)
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
