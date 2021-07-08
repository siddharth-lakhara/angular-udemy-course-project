import { EventEmitter } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';

export class RecipeService {
  handleRecipeItemClick = new EventEmitter<Recipe>();

  constructor() {}

  recipes: Recipe[] = [
    new Recipe('Roti', 'Tasty and round Roti', 'https://image.shutterstock.com/image-photo/indian-bread-roti-600w-1019185939.jpg'),
    new Recipe(
      'Paneer Butter Masala',
      'Tasty paneer curry with creamy gravy',
      'https://image.shutterstock.com/image-photo/paneer-butter-masala-cheese-cottage-600w-620764175.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
