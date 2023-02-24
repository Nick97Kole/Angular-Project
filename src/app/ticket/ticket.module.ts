import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';



@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports: [
    TicketListComponent
  ]
})
export class TicketModule { 

}
