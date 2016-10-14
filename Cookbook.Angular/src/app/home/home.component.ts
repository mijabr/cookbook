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
  styles: [require('./home.component.css')],
  providers: [AppService, RecipeService]
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private recipeService: RecipeService)
  {
    this.title = appService.getItem('title');
    this.givenName = appService.getItem('givenName');
  }

  title: string;
  givenName: string;
  recipes: IRecipe[];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.recipeService.getRecipes()
        .subscribe(response => this.recipes = response);
    });
  }
}