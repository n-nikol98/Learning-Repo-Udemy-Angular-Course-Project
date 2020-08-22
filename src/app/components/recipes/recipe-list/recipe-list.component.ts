import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('Test Recipe', 'A very random description',
     'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
