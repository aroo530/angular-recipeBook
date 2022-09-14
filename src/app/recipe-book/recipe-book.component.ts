import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ingredient, IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  recipeForm = this.formBuilder.group({
    recName: '',
    ingNames: '',
    ingMeasures: '',
    description: '',
  });

  ngOnInit(): void {}
  recipes: recipe[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  addRec() {
    let tmpIngredients: ingredient[] = [];
    const tmpNames: string[] = this.recipeForm.value.ingNames?.split(',')!;
    const tmpMeasures: string[] =
      this.recipeForm.value.ingMeasures?.split(',')!;
    for (let i = 0; i < tmpNames.length; i++) {
      tmpIngredients = this.ingredientService.addIng(tmpIngredients, {
        name: tmpNames[i],
        measure: tmpMeasures[i],
      });
    }
    this.recipes.push({
      recName: this.recipeForm.value.recName!,
      ingredients: tmpIngredients!,
      description: this.recipeForm.value.description!,
    });
  }
  removeRec(recName: string) {
    const index = this.recipes.map((recipe) => recipe.recName).indexOf(recName);
    this.recipes.splice(index, 1);
  }
}
type recipe = {
  recName: string;
  ingredients: ingredient[];
  description: string;
};
