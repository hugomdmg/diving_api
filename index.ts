import express, { Request, Response } from 'express';
import cors from 'cors'
import users from './src/routes/users'

const app = express();
const PORT = process.env.port || 3000

app.use(cors())
app.use(express.json());

app.use(users)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.get('/data', (req: Request, res: Response) => {
  res.send('Hello data');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;

