import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/tickets/models/ticket.model';

@Component({
  selector: 'ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() public ticket: Ticket;

  constructor() {}

  ngOnInit() {}
}
