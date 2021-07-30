import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientEmitterSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientEmitterSubscription = this.shoppingService.ingredientChangeEmitter.subscribe(
      (newIngredientsList) => {
        this.ingredients = newIngredientsList;
      }
    );
  }

  onEditItem(idx: number) {
    this.shoppingService.editIngredient.next(idx);
  }

  ngOnDestroy(): void {
    this.ingredientEmitterSubscription.unsubscribe();
  }
}
