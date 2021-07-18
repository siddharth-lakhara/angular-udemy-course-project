import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingService:ShoppingService) {}

  ngOnInit(): void {}

  addItemToCart = (): void => {
    const name: string = (this.nameInputRef.nativeElement.value).trim();
    const amount: number = +this.amountInputRef.nativeElement.value;

    if (name.length && amount>0) {
      const newIngredient: Ingredient = new Ingredient(name, amount);
      this.shoppingService.addIngredients(newIngredient);
    }
  };

  clearForm = (nameInput: HTMLInputElement, amountInput: HTMLInputElement): void => {
    nameInput.value = '';
    amountInput.value = '';
  };
}
