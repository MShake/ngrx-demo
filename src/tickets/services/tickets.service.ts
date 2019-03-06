import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http
      .get<Ticket[]>('http://localhost:3000/tickets')
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
