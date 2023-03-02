import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private repo:TicketRepositoryService){}
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.getDetails()

    
  }

  updateTicket(form: NgForm){
    this.id = this.route.snapshot.params['id'];
  let updatedTicket: ITicket = {
    id: this.id,
    title: form.form.value.title,
    description: form.form.value.description,
    createdBy: form.form.value.createdby,
    assignedTo: form.form.value.assignedto,
    status: form.form.value.status,
    createdDate: new Date(form.form.value.createddate.toString().replace("T00:00:00","")),
    resolvedDate: new Date(form.form.value.resolveddate)
    };
   this.repo.updateTicket(updatedTicket).subscribe(
   );
}

  getDetails(){
    this.repo.getTicketDetails(this.id).subscribe(
      (response) => {this.ticketDetails = response;
      });
  }



}
