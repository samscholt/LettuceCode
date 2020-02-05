import { Component, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


constructor(private Recipe : RecipeService) { }
  
 recipes;
 calories: number;
 gf: boolean;
 vegan:boolean;
 vegetarian:boolean;
 df:boolean

  ngOnInit() {

  }

 onSubmit(userInput,calories,gf,vegan,vegetarian,df){
   
      return this.Recipe.getRecipes(userInput,calories,gf,vegan,vegetarian,df).subscribe(data => this.recipes = data)

    }

}
