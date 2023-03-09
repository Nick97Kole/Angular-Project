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

ngOnInit(): void {
  this.repositoryService.getTickets().subscribe(
    (response) => {this.Tickets = response;});
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

 }


