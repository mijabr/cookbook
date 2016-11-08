import { Component, OnInit, Input } from '@angular/core';
import { IRecipe, IRecipePicture } from '../model/recipe';
var publicPath = require('./../../../config/publicPath');

@Component({
  selector: 'recipecard',
  template: require('./recipecard.component.html'),
  styles: [require('./recipecard.component.css')],
})
export class RecipeCardComponent implements OnInit {
  
  @Input() recipe : IRecipe;
  pics : any = [];

  ngOnInit() {
    for(var pic of this.recipe.Pictures) {
      this.pics.push(publicPath.path('assets/' + pic.Filename));
    }
  }
}
