import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

 
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe: any;
  toggle = false;
 show: boolean = false;
 
  constructor(private Recipe : RecipeService) { }

  ngOnInit() {
   
  }

  showDetails(){
    this.show= true;
  }

  closeDetails(){
    this.show= false;
  }

  addFavorite(yummy) {
    console.log(this.Recipe)
    this.Recipe.favorites.push(yummy);
   }

   clicked(){
     this.toggle = true
   }
   

}
