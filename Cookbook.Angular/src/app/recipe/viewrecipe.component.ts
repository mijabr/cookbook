import { Component, OnInit } from '@angular/core';
import { RouteParams, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'viewrecipe',
  template: require('./viewrecipe.component.html'),
  styles: [require('./viewrecipe.component.css')],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [RecipeService]
})
export class ViewRecipeComponent implements OnInit {
  
  constructor(private _recipeService : RecipeService,
              private _params : RouteParams)
  {
  }

  theid : number;
  thejson : string;
  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.theid = +this._params.get('id');
    this._recipeService.getRecipe(this.theid)
      .subscribe(recipe => this.selectedRecipe = recipe);
  }  
}
