import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import MenuItems from '../shared/types/menu.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('changeMenuItem') changeMenuItemEmitter = new EventEmitter<MenuItems>();

  handleMenuItemClick = (event) => {
    const itemId = event.target.getAttribute('x-data-item-id');
    this.changeMenuItemEmitter.emit(MenuItems[itemId]);
  };

  constructor() {}

  ngOnInit(): void {}
}
