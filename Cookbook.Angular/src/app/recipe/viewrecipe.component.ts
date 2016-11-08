import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
var publicPath = require('./../../../config/publicPath');

@Component({
  selector: 'viewrecipe',
  template: require('./viewrecipe.component.html'),
  styles: [require('./viewrecipe.component.css')]
})
export class ViewRecipeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private _recipeService : RecipeService)
  {
  }

  recipe : IRecipe;
  pics : any = [];

  ngOnInit()
  {
    this.route.params.forEach((params: Params) => {
      var id = +params['id'];
      this._recipeService.getRecipe(id)
        .subscribe(recipe => this.setRecipe(recipe));
    });
  }

  setRecipe(recipe : IRecipe) {
    this.recipe = recipe
    for(var pic of this.recipe.Pictures) {
      this.pics[pic.Filename] = publicPath.path('assets/' + pic.Filename);
    }
  }
}
