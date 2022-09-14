import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor() {}
  addIng(arr: ingredient[], ing: ingredient): ingredient[] {
    arr.push(ing);
    return arr;
    // console.log(this.ingredients);
  }
  removeIng(arr: ingredient[], name: string) {
    // console.log(name)
    const index = arr.map((ingredient) => ingredient.name).indexOf(name);
    arr.splice(index, 1);
    return arr;
  }
}

export type ingredient = {
  name: string;
  measure: string;
};
