import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

 
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe: any;
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

  toggleFavorite(yummy) {
    if (this.isAFavorite(yummy)) {
      // find location of this recipe in Favorites
      const locationInFaves = (recipe) => recipe.recipe.url === yummy.recipe.url;

      // remove this recipe from Favorites
      this.Recipe.favorites.splice(this.Recipe.favorites.findIndex(locationInFaves), 1);
    }
    else {
      this.Recipe.favorites.push(yummy);
    }
   }

   isAFavorite(yummy) {
     return this.Recipe.favorites.some(recipe => recipe.recipe.url === yummy.recipe.url);
   }
   

}
