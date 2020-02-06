import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private Recipe : RecipeService) { }
userInput: string;
recipes:[]

  ngOnInit() {

    this.Recipe.getRecipes(this.userInput).subscribe( (response: any) => this.recipes= response.hits.recipe);
  }
}