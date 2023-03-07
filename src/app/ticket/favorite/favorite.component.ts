import { Component } from '@angular/core';
import { FavoriteRepositoryService } from '../favorite-repository.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  constructor(private repositoryService: FavoriteRepositoryService) { }
  Favorites: any;
  ticketID :string = "";
  userId : string = ""
  ngOnInit(): void {
    this.repositoryService.getFavorites().subscribe(
      (response) => {this.Favorites = response;});

}
}
