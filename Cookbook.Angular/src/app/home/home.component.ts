import { Component, OnInit } from '@angular/core';
import { RouteData, CanReuse, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IRecipe } from '../model/recipe';
import { AppService } from '../service/app.service';
import { RecipeService } from '../service/recipe.service';
import { RecipeCardComponent } from '../recipecard/recipecard.component';
import { CreateRecipeComponent } from '../recipe/createrecipe.component';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')],
  directives: [ROUTER_DIRECTIVES, RecipeCardComponent],
  providers: [AppService, RecipeService]
})
export class HomeComponent implements OnInit, CanReuse {

  constructor(
    private _recipeService: RecipeService,
    private _appService: AppService,
    private _routeData: RouteData) {
    this.title = _appService.getItem('title');
    this.givenName = _appService.getItem('givenName');
  }

  title: string;
  givenName: string;
  recipes: IRecipe[];

  ngOnInit() {
    this._recipeService.getRecipes()
      .subscribe(response => this.recipes = response);
  }

  routerCanReuse() {
    return false;
  }
}