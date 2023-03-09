import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../Interfaces/Ticket';
import { TicketRepositoryService } from '../ticket-repository.service';
import { Router } from '@angular/router';
import { IFavorite } from '../Interfaces/favorite';
import { FavoriteRepositoryService } from '../favorite-repository.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {

  @Input() id: number = -1;
  @Input() title: string = "";
   ticketDetails: ITicket | undefined;
userId: string = ""
  constructor(private route: ActivatedRoute, private repo:TicketRepositoryService, private _router: Router, private favoriteRepositoryService: FavoriteRepositoryService
    ){}
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
    createdDate: (form.form.value.createddate.toString().replace("T00:00:00","")),
    resolvedDate:(form.form.value.resolveddate.toString().replace("T00:00:00",""))
    };



   this.repo.updateTicket(updatedTicket).subscribe(
   );
   this._router.navigate(['ticket-list'])

}

  getDetails(){
    this.repo.getTicketDetails(this.id).subscribe(
      (response) => {this.ticketDetails = response;
      });
  }

favoriteTicket(form: NgForm)
{
  let newFavorite: IFavorite = {
    Id: -1, 
    TicketId: this.id,
    UserId: form.form.value.userId
  }
    this.favoriteRepositoryService.addFavorite(newFavorite).subscribe();
  

}
}
