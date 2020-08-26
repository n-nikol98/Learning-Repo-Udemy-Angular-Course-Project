import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected: EventEmitter<Recipe>;

  recipes: Array<Recipe>;

  constructor() { 
    this.recipeSelected = new EventEmitter<Recipe>();

    this.recipes = [
      new Recipe('Test Recipe', 'A very random description',
       'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg')
    ];
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }
}
