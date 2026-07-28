import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Health check route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Greeting route
app.get('/greet/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

export default app;
