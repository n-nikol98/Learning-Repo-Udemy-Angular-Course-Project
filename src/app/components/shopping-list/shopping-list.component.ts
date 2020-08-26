import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../global-models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor() { 
    this.ingredients = [];
  }

  ngOnInit(): void {
  }

  onIngredientCreated(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

}
