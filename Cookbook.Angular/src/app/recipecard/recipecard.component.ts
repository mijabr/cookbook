import { Component, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { IRecipe } from '../model/recipe';

@Component({
  selector: 'recipecard',
  template: require('./recipecard.component.html'),
  styles: [require('./recipecard.component.css')],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class RecipeCardComponent {
  
  @Input() recipe : IRecipe;
}
