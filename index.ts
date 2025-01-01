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

app.get('/users', async (req: Request, res: Response) => {
  try {
    const response = await db.getAllItems('users');
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
});

app.get('/data', (req: Request, res: Response) => {
  res.send('Hello data');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
