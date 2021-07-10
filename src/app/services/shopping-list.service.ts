import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingService {
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomato', 3)];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  handleSendToCart(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
  }
}
