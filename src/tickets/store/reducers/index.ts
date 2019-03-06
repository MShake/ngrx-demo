import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromTickets from './tickets.reducer';

export interface TicketsState {
  tickets: fromTickets.TicketState;
}

export const reducers: ActionReducerMap<TicketsState> = {
  tickets: fromTickets.reducer
};

export const getTicketsState = createFeatureSelector<TicketsState>('tickets');

// Ticket state
export const getTicketState = createSelector(
  getTicketsState,
  (state: TicketsState) => state.tickets
);

export const getTicketsEntities = createSelector(
  getTicketState,
  fromTickets.getTicketsEntities
);

export const getAllTickets = createSelector(
  getTicketsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getTicketsLoaded = createSelector(
  getTicketState,
  fromTickets.getTicketsLoaded
);

export const getTicketsLoading = createSelector(
  getTicketState,
  fromTickets.getTicketsLoading
);
