import { Component, OnInit } from '@angular/core';
import { ITicket } from '../Interfaces/Ticket';
import { TicketRepositoryService } from '../ticket-repository.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  // ticketList: ITicket[] = [];

  constructor(private repositoryService: TicketRepositoryService) { }
  Tickets: any;
  // ngOnInit(): void {
  //   this.getTickets();
  // }
//   getTickets() {
//     this.repositoryService.getTickets().subscribe(
//       (response: any) => { this.Tickets = response; });
// }

ngOnInit(): void {
  this.repositoryService.getTickets().subscribe(
    (response) => {this.Tickets = response;});
}
// ngOnInit(): void {
//   this.ticketList = this.repositoryService.getTickets()





 }
