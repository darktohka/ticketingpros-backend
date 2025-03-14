import { Hono } from 'hono';
import { getAllTickets } from './ticket-service';

const app = new Hono();

app.get('/tickets', async (c) => {
  const tickets = await getAllTickets();
  return c.json(tickets);
});

export default app;
