import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';

const routes: Routes = [
 
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-detail/:id', component: TicketDetailComponent },
  { path: '', redirectTo: '/ticket-list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
