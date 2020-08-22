import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../global-models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('Beef Jerky', 2),
    new Ingredient('Orange', 4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
