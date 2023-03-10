import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITicket } from '../Interfaces/Ticket';
import { TicketRepositoryService } from '../ticket-repository.service';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  constructor(private repositoryService: TicketRepositoryService) { }
  Tickets: any;
  title: string = "";
  description: string = "";
  createdby: string = "";
  assignedTo: string = "";
  status: string = "";
  createDate: string = "";
  resolvedDate: string = "";
  showAllTickets: boolean = false;
  buttonText: string = "Show All Tickets"
  ticketHeader : string = "Current Tickets"


ngOnInit(): void {
  this.getOpenTickets();

}
addTicket(form: NgForm){

  let newTicket: ITicket = {
    id: -1,
    title: form.form.value.title,
    description: form.form.value.description,
    createdBy: form.form.value.createdby,
    assignedTo: form.form.value.assignedto,
    status: form.form.value.status,
    createdDate: (form.form.value.createddate),
    resolvedDate:  (form.form.value.resolveddate)

    

  };

  this.repositoryService.addTickets(newTicket).subscribe(
    () => { this.getTickets(); }
  );
  form.resetForm();

}

getTickets() {
  this.repositoryService.getTickets().subscribe(
    (response) => { this.Tickets = response; });
}

getColor(status:string):string{
  if( status === "Open"){
    return "Red"
  }
  return "green"
      }

      getOpenTickets(){
        this.repositoryService.getOpenTickets().subscribe(
          (response) => {this.Tickets = response;});
        }

    toggleTickets(): void{
          this.showAllTickets = !this.showAllTickets;
          if (this.showAllTickets) {
                this.getTickets()
            this.buttonText = "Show Open Tickets";
            this.ticketHeader = "All Tickets"

          }
          else
          {
            this.getOpenTickets()
            this.buttonText = "Show All Tickets";
            this.ticketHeader = "Current Tickets"

          }
        }
 }


