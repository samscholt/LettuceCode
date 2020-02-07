import { Component, OnInit,Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
// import { EventEmitter } from 'events';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  constructor(private search : SearchCriteriaComponent, private Recipe : RecipeService) { }
  userInput : any
  recipes=[];
   
  ngOnInit() {
  }

   loadResults(searchResults : any[]){
     const userInput = searchResults[0];
     const calories = searchResults[1];
     const vegetarian = searchResults[2];
     const vegan = searchResults[3];
     const treenuts = searchResults[4];


     this.Recipe.getRecipes(userInput,calories,vegetarian,vegan, treenuts).subscribe((data:any) => this.recipes = data.hits);
 
   }

   addFavorite(yummy) {
    this.Recipe.favorites.push(yummy);
   }

}