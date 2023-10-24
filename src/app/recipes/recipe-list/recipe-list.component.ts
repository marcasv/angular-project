import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"),
    new Recipe("Otro producto", "Pink hair", "https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg")
  ];
  
  constructor() {}

  ngOnInit(): void {
      
  }
}
