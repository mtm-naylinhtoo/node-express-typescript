import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import './database';
import blogRoutes from './routes/blogRoutes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running bro. trust me.');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use('/api', blogRoutes);