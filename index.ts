import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.port || 3000

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
