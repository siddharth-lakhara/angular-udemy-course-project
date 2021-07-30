import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) {}

  ngOnInit(): void {}

  addItemToCart = (form: NgForm): void => {
    const value = form.value;
    const name:string = value.name;
    const amount:number = value.amount;

    const newIngredient: Ingredient = new Ingredient(name, amount);
    this.shoppingService.addIngredients(newIngredient);
  };

  clearForm = (form: NgForm): void => {
    form.reset();
  };
}
