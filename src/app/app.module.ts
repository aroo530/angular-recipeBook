import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [
  // { path: '', component: AppComponent },
  { path: 'recipe', component: RecipeBookComponent },
  { path: '', component: ShoppingListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListComponent,
    RecipeBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    RouterModule.forRoot(routs),
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
