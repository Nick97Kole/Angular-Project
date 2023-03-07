import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFavorite } from './Interfaces/favorite';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FavoriteRepositoryService {
  private apiUri  = 'https://localhost:7225/api/Favorite'
  constructor(private http: HttpClient) { }
  addFavorite(favorite:IFavorite)  {    return this.http.post(`${this.apiUri}/add`,favorite);  }

  getFavorites() {
    return this.http.get(`${this.apiUri}`);  
  }
}

