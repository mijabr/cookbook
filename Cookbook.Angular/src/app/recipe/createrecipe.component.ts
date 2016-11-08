import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { MdIconRegistry } from '@angular/material'
import { IRecipe, Recipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import '../array.extension'
var publicPath = require('./../../../config/publicPath');

@Component({
  selector: 'createrecipe',
  template: require('./createrecipe.component.html'),
  styles: [require('./createrecipe.component.css')]
})
export class CreateRecipeComponent implements OnInit {
  
  constructor(private router: Router,
              private iconRegistry : MdIconRegistry,
              private recipeService : RecipeService)
  {
    iconRegistry.addSvgIcon('add', publicPath.path('assets/icon/ic_add_box_black_24px.svg'));
    iconRegistry.addSvgIcon('delete', publicPath.path('assets/icon/ic_delete_forever_black_24px.svg'));
  }

  recipe : IRecipe;

  ngOnInit()
  {
    this.recipe = new Recipe();
  }

  onSave()
  {
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        response => {
          if (this.recipe.Id != 0)
          {
            this.router.navigate(['/recipe/view/', this.recipe.Id]);
          }
          else {
            this.router.navigate(['/']);
          }
          },
        error => {
          alert(error.text());
          console.log(error.text());
        }
     )
  }

  onAddIngredient()
  {
    this.recipe.Ingredients.push(<IIngredient>{});
  }

  onRemoveIngredient(ingredient : IIngredient)
  {
    this.recipe.Ingredients = this.recipe.Ingredients.remove(ingredient);
  }
}
