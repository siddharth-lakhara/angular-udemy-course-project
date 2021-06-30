import { Component } from '@angular/core';
import MenuItems from './shared/types/menu.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-udemy-course-project';

  menuItemsRef: typeof MenuItems = MenuItems;
  menuToDisplay: MenuItems = MenuItems.recipeMenuItem;

  changeMenuItem = (newItem:MenuItems) => {
    this.menuToDisplay = newItem;
    console.log('new menu item: ', newItem);
  };
}
