import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  isEditing = false;
  recipeForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      this.recipeId = +param['id'];
      this.isEditing = param['id'] ? true : false;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.isEditing) {
      const recipe = this.recipeService.getRecipeById(this.recipeId);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach((ing) => {
          const newIngredient = new FormGroup({
            name: new FormControl(ing.name),
            amount: new FormControl(ing.amount),
          });
          recipeIngredients.push(newIngredient);
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImgPath),
      decription: new FormControl(recipeDescription),
      ingredients: recipeIngredients,
    });
  }

  getIngredientControls():AbstractControl[] {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    const ingredients = <FormArray>this.recipeForm.get('ingredients');
    ingredients.push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl(),
      })
    )


  };

  onSubmit() {
    console.log(this.recipeForm);
  }
}
