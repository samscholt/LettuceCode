import { Component, OnInit,Input } from '@angular/core';
import { RecipeService } from '../recipe.service'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private Recipe : RecipeService) { }
  userInput : any
  recipes:any[]
   
  ngOnInit() {
  }

}
