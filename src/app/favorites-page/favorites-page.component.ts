import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})

export class FavoritesPageComponent implements OnInit {


  constructor(private Recipe: RecipeService) {
    
  }

  ngOnInit() {
  }

}
