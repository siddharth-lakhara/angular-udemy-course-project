import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Recipe } from '../shared/models/recipe.model';

export class RecipeService {
  // handleRecipeItemClick = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Roti',
      'Tasty and round Roti',
      'https://image.shutterstock.com/image-photo/indian-bread-roti-600w-1019185939.jpg',
      [new Ingredient('Atta', 1), new Ingredient('Namak', 1)]
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

  getRecipeById(id: number) {
    if (id>0 && id<=this.recipes.length) {
      return this.recipes[id-1];
    }
    return {} as Recipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(idx: number, recipe: Recipe) {
    this.recipes[idx] = recipe;
  }
}
