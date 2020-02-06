import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/Operators'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl : string =  "https://api.edamam.com/search";
  app_id : string = '453ed4ac';
  api_key : string = '4fe28da74eeb88aac62510fabf639157';

  constructor( private http: HttpClient) { }

  getRecipeURL(q) {
    return `${this.recipeUrl}?q=${q}&app_id=${this.app_id}&app_key=${this.api_key}`;
  }

  getRecipes(search){
    return this.http.get(this.getRecipeURL(search) + `&from=0&to=3&calories=591-722&health=alcohol-free`)
  }

}


//https://api.edamam.com/search?q=chicken&app_id=453ed4ac&app_key=4fe28da74eeb88aac62510fabf639157&from=0&to=3&calories=591-722&health=alcohol-free
