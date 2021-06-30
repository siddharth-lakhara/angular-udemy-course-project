import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output('handleRecipeItemClick') recipeItemEmitter =
    new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Roti',
      'Tasty and round Roti',
      'https://image.shutterstock.com/image-photo/indian-bread-roti-600w-1019185939.jpg'
    ),
    new Recipe(
      'Paneer Butter Masala',
      'Tasty paneer curry with creamy gravy',
      'https://image.shutterstock.com/image-photo/paneer-butter-masala-cheese-cottage-600w-620764175.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  handleRecipeItemClick = (recipeDetails:Recipe) => {
    this.recipeItemEmitter.emit(recipeDetails);
  };
}
