import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipeUrl : string =  "https://api.edamam.com/search";
  app_id : string = '453ed4ac';
  api_key : string = '4fe28da74eeb88aac62510fabf639157';
  caloriesmin: string;
  caloriesmax: string;
  // calories: string;
    gf: string;
    vegan:string;
    vegetarian:string;
    df:string
  constructor( private http: HttpClient) { }
    

  getRecipeURL(q, calories) {
    let url = `${this.recipeUrl}?q=${q}&app_id=${this.app_id}&app_key=${this.api_key}`;

    url += `&from=0&to=6&health=alcohol-free`;

    if (calories)
     url += `&calories=${calories}`;

    return url;
  }

  getRecipes(userInput,calories){
    return this.http.get(this.getRecipeURL(userInput, calories));
  }

}
