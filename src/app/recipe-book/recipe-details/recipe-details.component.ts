import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: Recipe;

  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      const recipeId = +param['id'];
      this.getRecipeById(recipeId);
    });
  }

  sendToCart() {
    const ingredient = this.recipeDetails.ingredients;
    this.recipeService.sendToCart(ingredient);
  }

  getRecipeById(recipeId: number) {
    if (recipeId) {
      this.recipeDetails = this.recipeService.getRecipeById(recipeId);
    } else {
      this.recipeDetails = {} as Recipe;
    }
  }
}
