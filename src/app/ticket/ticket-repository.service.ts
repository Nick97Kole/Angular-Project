import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from './Interfaces/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryService {
  private apiUri  = 'https://localhost:7225/api/Help_Desk'

  constructor(private http: HttpClient) { }
  // apiUri: string = 'https://localhost:7225/api/ticket/getall'
  // getTickets() {
  //   return this.http.get(this.apiUri)
  // }
  getTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(this.apiUri);
  }

  getTicket(id: number): Observable<ITicket> {
    return this.http.get<ITicket>(`${this.apiUri}/${id}`);
  }
}
