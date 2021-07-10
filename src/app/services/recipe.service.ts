import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Recipe } from '../shared/models/recipe.model';
import { ShoppingService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  handleRecipeItemClick = new EventEmitter<Recipe>();

  constructor(private shoppingService:ShoppingService) {}

  recipes: Recipe[] = [
    new Recipe(
      'Roti',
      'Tasty and round Roti',
      'https://image.shutterstock.com/image-photo/indian-bread-roti-600w-1019185939.jpg',
      [new Ingredient('Atta', 0), new Ingredient('Namak', 0)]
    ),
    new Recipe(
      'Paneer Butter Masala',
      'Tasty paneer curry with creamy gravy',
      'https://image.shutterstock.com/image-photo/paneer-butter-masala-cheese-cottage-600w-620764175.jpg',
      [new Ingredient('Paneer', 2), new Ingredient('Butter', 1), new Ingredient('Masala', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  sendToCart(ingredient: Ingredient[]) {
    this.shoppingService.handleSendToCart(ingredient);
  }
}
