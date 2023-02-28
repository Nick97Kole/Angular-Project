import { Component, Input } from '@angular/core';
import { ITicket } from '../Interfaces/Ticket';
import { TicketRepositoryService } from '../ticket-repository.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {

  @Input() id: number = -1;
  ticketDetails: ITicket | undefined;
  constructor(private repo:TicketRepositoryService){}
  ngOnInit(): void{
    this.repo.getTicketDetails(this.id).subscribe(
      (response) => {this.ticketDetails = response;});
  }

}
