import { Component, OnInit,Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  constructor(private search : SearchCriteriaComponent, private Recipe : RecipeService) { }
  userInput : any;
  recipes=[];
   
  ngOnInit() {
  }

  searching: boolean = false;

  onSubmit({userInput, calories,vegetarian,vegan, treenuts}){
    this.searching = true;
    return this.Recipe.getRecipes(userInput,calories,vegetarian,vegan, treenuts).subscribe(
    ((data:any) => this.recipes = data.hits),
    (() => this.searching = false));
  }

  addFavorite(yummy) {
    this.Recipe.favorites.push(yummy);
   }

   

}