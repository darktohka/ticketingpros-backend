import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface Database {
  ticket: TicketTable;
}

export interface TicketTable {
  id: Generated<number>;
  name: string;
}

export type Ticket = Selectable<TicketTable>;
export type NewTicket = Insertable<TicketTable>;
export type TicketUpdate = Updateable<TicketTable>;
