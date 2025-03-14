import { db } from './database';
import { mapTicketToTicketDTO } from './mappers';

export const getAllTickets = async () => {
  const tickets = await db.selectFrom('ticket').selectAll().execute();
  return tickets.map(mapTicketToTicketDTO);
};
