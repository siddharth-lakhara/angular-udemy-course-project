import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  recipeDetails:Recipe;

  constructor() {}

  ngOnInit(): void {}

  handleRecipeItemClick = (recipeDetails:Recipe) => {
    this.recipeDetails = recipeDetails;
  };
}
