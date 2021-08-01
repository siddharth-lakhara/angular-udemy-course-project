import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { Recipe } from '../shared/models/recipe.model';

export class RecipeService {
  recipeChangeObserver = new Subject<Recipe[]>();

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

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    if (id >= 0 && id < this.recipes.length) {
      return this.recipes[id];
    }
    return {} as Recipe;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeChangeObserver.next(this.getRecipes());
  }

  updateRecipe(idx: number, recipe: Recipe): void {
    this.recipes[idx] = recipe;
    this.recipeChangeObserver.next(this.getRecipes());
  }

  deleteRecipe(idx: number): void {
    this.recipes.splice(idx, 1);
    this.recipeChangeObserver.next(this.getRecipes());
  }
}
