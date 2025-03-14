import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getAllTickets } from './ticket-service';

const app = new Hono();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN as string,
  }),
);

app.get('/tickets', async (c) => {
  const tickets = await getAllTickets();
  return c.json(tickets);
});

export default app;
