import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingService {
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomato', 3)];
  ingredientChangeEmitter = new Subject<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChangeEmitter.next(this.ingredients);
  }

  handleSendToCart(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
