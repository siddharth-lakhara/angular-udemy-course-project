import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { ShoppingService } from './services/shopping-list.service';
import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    DropdownDirective,
    NoRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
