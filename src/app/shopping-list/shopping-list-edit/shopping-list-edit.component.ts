import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) ingForm: NgForm;

  editIngredientSub:Subscription;
  editMode = false;
  editItemIdx:number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.editIngredientSub = this.shoppingService.editIngredient
      .subscribe(
        (idx:number) => {
          this.editMode = true;
          this.editItemIdx = idx;
          this.editedItem = this.shoppingService.getIngredientAtIdx(idx);
          this.ingForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      );
  }

  addItemToCart = (form: NgForm): void => {
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editItemIdx, newIngredient);
    } else {
      this.shoppingService.addIngredients(newIngredient);
    }
    this.clearForm(this.ingForm);
  };

  clearForm = (form: NgForm): void => {
    form.reset();
  };

  ngOnDestroy() {
    this.editIngredientSub.unsubscribe();
  }
}
