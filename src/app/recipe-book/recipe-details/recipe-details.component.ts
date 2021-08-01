import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping-list.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: Recipe;
  recipeId:number;

  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private shoppingService: ShoppingService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      this.recipeId = +param['id'] - 1;
      console.log(this.recipeId);
      this.getRecipeById();
    });
  }

  sendToCart() {
    const ingredient = this.recipeDetails.ingredients;
    this.shoppingService.handleSendToCart(ingredient);
  }

  getRecipeById() {
    if (this.recipeId !== undefined) {
      this.recipeDetails = this.recipeService.getRecipeById(this.recipeId);
    } else {
      this.recipeDetails = {} as Recipe;
    }
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['..'], { relativeTo: this.activeRoute});
  }
}
