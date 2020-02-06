import { Component, OnInit, Output, Input} from '@angular/core';
import { RecipeService } from '../recipe.service'
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


constructor() { }
@Output() search = new EventEmitter();

 
  ngOnInit() {

  }
  onSubmit(userInput, calories,vegetarian,vegan, treenuts){
    this.search.emit([userInput, calories,vegetarian,vegan, treenuts]);
  }
 

}
