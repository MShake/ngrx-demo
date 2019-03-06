import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as ticketsActions from '../actions/tickets.action';
import * as fromServices from '../../services';

@Injectable()
export class TicketsEffects {
  constructor(
    private actions$: Actions,
    private ticketsService: fromServices.TicketsService
  ) {}

  @Effect()
  loadTickets$ = this.actions$.pipe(
    ofType(ticketsActions.LOAD_TICKETS),
    switchMap(() => {
      return this.ticketsService.getTickets().pipe(
        map(tickets => new ticketsActions.LoadTicketsSuccess(tickets)),
        catchError(error => of(new ticketsActions.LoadTicketsFail(error)))
      );
    })
  );
}
