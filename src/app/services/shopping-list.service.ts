import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingService {
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomato', 3)];
  ingredientChangeEmitter = new Subject<Ingredient[]>();

  editIngredient = new Subject<number>();

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientAtIdx(idx: number): Ingredient {
    return this.ingredients[idx];
  }

  addIngredients(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientChangeEmitter.next(this.ingredients.slice());
  }

  updateIngredient(idx: number, newIngredient: Ingredient): void {
    this.ingredients[idx] = newIngredient;
    this.ingredientChangeEmitter.next(this.ingredients.slice());
  }

  deleteIngredient(idx: number): void {
    this.ingredients.splice(idx, 1);
    this.ingredientChangeEmitter.next(this.ingredients.slice());
  };

  handleSendToCart(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
  }
}
