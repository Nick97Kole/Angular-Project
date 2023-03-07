import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './ticket/favorite/favorite.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';

const routes: Routes = [
 
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'ticket-detail/:id', component: TicketDetailComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: '', redirectTo: '/ticket-list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
