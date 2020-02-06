import { Component, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  @Output() search = new EventEmitter<string>()

  constructor() { }
  

  ngOnInit() {

  }

 onSubmit(userInput, calories, gf, vegetarian, vegan, df){
      console.log(userInput);
      console.log(calories);
      console.log(gf);
      console.log(vegetarian);
      console.log(vegan);
      console.log(df);
      this.search.emit(userInput);
    }

}
