import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { IRecipe } from '../model/recipe';
import { AppService } from '../service/app.service';
import { RecipeService } from '../service/recipe.service';
import { RecipeCardComponent } from '../recipecard/recipecard.component';
import { CreateRecipeComponent } from '../recipe/createrecipe.component';

@Component({
  selector: 'home-component',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')]
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private recipeService: RecipeService)
  {
    this.appTitle = this.appService.getItem('appTitle');
  }

  appTitle: string;
  recipes: IRecipe[];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.recipeService.getRecipes()
        .subscribe(response => this.recipes = response);
    });
  }
}