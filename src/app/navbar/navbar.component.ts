import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  static shopping = true;
  toRecipe() {
    NavbarComponent.shopping = false;
  }
  toShopping() {
    NavbarComponent.shopping = true;
  }
  static isShopping() {
    console.log(`call  ${this.shopping}`);
    return this.shopping;
  }
  constructor() {}
  ngOnInit(): void {}
}
