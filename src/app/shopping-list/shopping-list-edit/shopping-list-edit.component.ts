import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output('addIngredient') addIngredientEmitter = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addItemToCart = (nameInput: HTMLInputElement, amountInput: HTMLInputElement): void => {
    const name:string = nameInput.value;
    const amount:number = +amountInput.value;

    const newIngredient:Ingredient = new Ingredient(name, amount);
    this.addIngredientEmitter.emit(newIngredient);
  };

  clearForm = (nameInput: HTMLInputElement, amountInput: HTMLInputElement): void => {
    nameInput.value = '';
    amountInput.value = '';
  };
}
