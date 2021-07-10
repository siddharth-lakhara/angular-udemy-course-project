import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDetails: Recipe;

  constructor(private recipeService:RecipeService) {
    this.recipeDetails = {} as Recipe;
  }

  ngOnInit(): void {}

  sendToCart() {
    const ingredient = this.recipeDetails.ingredients;
    this.recipeService.sendToCart(ingredient);
  }
}
