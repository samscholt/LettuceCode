import { Component, OnInit, Output, Input} from '@angular/core';
import { RecipeService } from '../recipe.service'
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


constructor(private Recipe : RecipeService) { }
@Input() recipes:[]

 
  ngOnInit() {

  }
  onSubmit(userInput, calories,vegetarian,vegan, lactose){
    return this.Recipe.getRecipes(userInput,calories,vegetarian,vegan, lactose).subscribe((data:any) => this.recipes = data.hits)

    
  }
 

}
