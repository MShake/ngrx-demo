import { Ticket } from 'src/tickets/models/ticket.model';
import * as fromTickets from '../actions/tickets.action';

export interface TicketState {
  entities: { [id: number]: Ticket };
  loaded: boolean;
  loading: boolean;
}

export const initialState: TicketState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromTickets.TicketsAction
): TicketState {
  switch (action.type) {
    case fromTickets.LOAD_TICKETS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromTickets.LOAD_TICKETS_SUCCESS: {
      const tickets = action.payload;

      const entities = tickets.reduce(
        (entities: { [id: number]: Ticket }, ticket: Ticket) => {
          return {
            ...entities,
            [ticket.id]: ticket
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromTickets.LOAD_TICKETS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getTicketsLoading = (state: TicketState) => state.loading;
export const getTicketsLoaded = (state: TicketState) => state.loaded;
export const getTicketsEntities = (state: TicketState) => state.entities;
