import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

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
      const recipe = this.recipeService.getRecipeById(this.recipeId-1);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach((ing) => {
          const newIngredient = new FormGroup({
            name: new FormControl(ing.name, Validators.required),
            amount: new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
          });
          recipeIngredients.push(newIngredient);
        });
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImgPath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  getIngredientControls(): AbstractControl[] {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    const ingredients = <FormArray>this.recipeForm.get('ingredients');
    ingredients.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }

  onSubmit() {
    // ****
    // No need to create new recipe variable as we are
    // values in form match what is required by recipe constructor
    // ****

    // const recipeName = this.recipeForm.value['name'];
    // const recipeDescription = this.recipeForm.value['description'];
    // const recipeImgPath = this.recipeForm.value['imagePath'];
    // const recipeIngredients = this.recipeForm.value['ingredients'];
    // const newRecipe = new Recipe(recipeName, recipeDescription, recipeImgPath, recipeIngredients);

    if (this.isEditing) {
      this.recipeService.updateRecipe(this.recipeId-1, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }
}
