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

  constructor( private http: HttpClient) { }
  

  getRecipeURL(q, calories, vegetarian, vegan, treenuts) {
  
    let url = `${this.recipeUrl}?q=${q}&app_id=${this.app_id}&app_key=${this.api_key}`;

    url += `&from=0&to=10`;

    if (calories)
     url += `&calories=10-${calories}`;

     if(vegan){
        vegan = 'vegan';
         url += `&health=${vegan}`;
     }
    
    if(vegetarian){
        vegetarian = 'vegetarian';
       url += `&health=${vegetarian}"`;
      }

    if(treenuts){
      treenuts = 'tree-nut-free';
      url += `&Health=${treenuts}`;
    }
   
    return url;
  }

  getRecipes(userInput,calories,vegetarian,vegan, treenuts){
    return this.http.get(this.getRecipeURL(userInput, calories,vegetarian,vegan, treenuts));
  }

}
