import { Component, OnInit,Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { EventEmitter } from 'events';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  @Output() submitted = new EventEmitter()


  constructor(private search : SearchCriteriaComponent) { }
  userInput : any
  @Input() recipes=[]
   
  ngOnInit() {

  }

   onSubmit(userInput, calories,vegetarian,vegan,lactose){
    this.submitted.emit(userInput,calories,vegetarian,vegan, lactose)
 
   }

}
