import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';

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

  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.route.params.forEach((params: Params) => {
      var id = +params['id'];
      this._recipeService.getRecipe(id)
        .subscribe(recipe => this.selectedRecipe = recipe);
    });
  }  
}
