import { Action } from '@ngrx/store';
import { Ticket } from 'src/tickets/models/ticket.model';

// Load tickets
export const LOAD_TICKETS = '[Tickets] Load Tickets';
export const LOAD_TICKETS_FAIL = '[Tickets] Load Tickets Fail';
export const LOAD_TICKETS_SUCCESS = '[Tickets] Load Tickets Success';

export class LoadTickets implements Action {
  readonly type = LOAD_TICKETS;
}

export class LoadTicketsFail implements Action {
  readonly type = LOAD_TICKETS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTicketsSuccess implements Action {
  readonly type = LOAD_TICKETS_SUCCESS;
  constructor(public payload: Ticket[]) {}
}

// Action types
export type TicketsAction = LoadTickets | LoadTicketsFail | LoadTicketsSuccess;
