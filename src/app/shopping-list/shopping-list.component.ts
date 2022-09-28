import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService, ingredient } from '../ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ingredient[] = [];
  ingredientForm = this.formBuilder.group({
    name: '',
    measure: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ingredientService: IngredientService
  ) {}
  addIng() {
    const ing = {
      name: this.ingredientForm.value.name || 'N/A',
      measure: this.ingredientForm.value.measure || 'N/A',
    };
    this.ingredientService.addIng(this.shoppingList, ing);
  }
  removeIng(name: string) {
    this.ingredientService.removeIng(this.shoppingList, name);
  }
  onLoadRecipe() {
    // do something
    this.router.navigate(['recipe'], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
