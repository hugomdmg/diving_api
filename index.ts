import express, { Request, Response } from 'express';
import db from './src/services/data_base';
import cors from 'cors'

const app = express();
const PORT = process.env.port || 3000

app.use(cors())
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.get('/data', (req: Request, res: Response) => {
  const response = db.getAllItems('users')
  res.send(response)
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
