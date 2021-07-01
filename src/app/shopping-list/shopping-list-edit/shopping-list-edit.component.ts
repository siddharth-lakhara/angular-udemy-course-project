import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output('addIngredient') addIngredientEmitter = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addItemToCart = (): void => {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;

    const newIngredient: Ingredient = new Ingredient(name, amount);
    this.addIngredientEmitter.emit(newIngredient);
  };

  clearForm = (nameInput: HTMLInputElement, amountInput: HTMLInputElement): void => {
    nameInput.value = '';
    amountInput.value = '';
  };
}
