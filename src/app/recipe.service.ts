import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl: "https:developer.edamam.com/edamam-recipe-api"



  constructor( private http: HttpClient) { }


  getRecipes(){
    return this.http.get(this.recipeUrl)
  }
}
