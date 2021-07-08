import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }
}
