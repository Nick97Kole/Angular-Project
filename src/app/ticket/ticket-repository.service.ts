import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicket } from './Interfaces/Ticket';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryService {
  private apiUri  = 'https://localhost:7225/api/Ticket'
  constructor(private http: HttpClient) { }
  getTickets() {
    return this.http.get(this.apiUri)
  }

  addTickets(ticket:ITicket)  {
    return this.http.post(`${this.apiUri}/add`,ticket);
  }


  getTicketDetails(id:number){
    let newUri = `${this.apiUri}/${id}`
    return this.http.get<ITicket>(newUri);
  }

  updateTicket(ticket:ITicket){
    return this.http.post(`${this.apiUri}/update`,ticket);
  }
}
