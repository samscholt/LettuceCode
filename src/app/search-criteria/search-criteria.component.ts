import { Component, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service'
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

 onSubmit(userInput){
      this.search.emit(userInput)
    }

}
