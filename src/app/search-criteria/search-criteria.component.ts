import { Component, OnInit,} from '@angular/core';
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


constructor(private Recipe : RecipeService) { }
  
 recipes;
 

  ngOnInit() {

  }

 onSubmit(userInput, calories){
      return this.Recipe.getRecipes(userInput,calories).subscribe((data:any) => this.recipes = data.hits)

    }

}
