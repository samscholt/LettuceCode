import { Component, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

 recipes;

  constructor(private Recipe : RecipeService) { }
  

  ngOnInit() {

  }

 onSubmit(userInput){
      return this.Recipe.getRecipes(userInput).subscribe(data => this.recipes = data)
    }

}
