import { Ticket } from './db-types';
import { TicketDTO } from './dto-types';

export const mapTicketToTicketDTO = (ticket: Ticket): TicketDTO => {
  return {
    id: ticket.id,
    name: ticket.name,
  };
};
