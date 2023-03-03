import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TicketListComponent,
    TicketDetailComponent
  ]
})
export class TicketModule {
}
