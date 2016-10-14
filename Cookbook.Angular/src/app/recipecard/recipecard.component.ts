import { Component, Input } from '@angular/core';
import { IRecipe } from '../model/recipe';

@Component({
  selector: 'recipecard',
  template: require('./recipecard.component.html'),
  styles: [require('./recipecard.component.css')],
})
export class RecipeCardComponent {
  
  @Input() recipe : IRecipe;
}
