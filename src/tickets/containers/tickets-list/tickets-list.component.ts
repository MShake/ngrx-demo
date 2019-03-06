import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { store } from '@angular/core/src/render3';
import { Ticket } from 'src/tickets/models/ticket.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  tickets$: Observable<Ticket[]>;

  constructor(private store: Store<fromStore.TicketsState>) {}

  ngOnInit() {
    this.tickets$ = this.store.select(fromStore.getAllTickets);
    this.store.dispatch(new fromStore.LoadTickets());
  }
}
