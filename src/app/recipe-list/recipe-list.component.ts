import { Component, OnInit,Input } from '@angular/core';
import { RecipeService } from '../recipe.service'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private Recipe : RecipeService) { }
  @Input() userInput : any

  recipes:any[]
  
  ngOnInit() {

    this.Recipe.getRecipes(this.userInput).subscribe( (response: any) => {
      this.recipes= response.hits.map(rec => rec.recipe)
      
    });
  }

}
