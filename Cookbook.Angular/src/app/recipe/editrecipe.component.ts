import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { IRecipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import '../array.extension'
var publicPath = require('./../../../config/publicPath');

@Component({
  selector: 'editrecipe',
  template: require('./editrecipe.component.html'),
  styles: [require('./editrecipe.component.css')]
})
export class EditRecipeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private iconRegistry : MdIconRegistry,
              private _recipeService : RecipeService)
  {
    iconRegistry.addSvgIcon('add', publicPath.path('assets/icon/ic_add_box_black_24px.svg'));
    iconRegistry.addSvgIcon('delete', publicPath.path('assets/icon/ic_delete_forever_black_24px.svg'));
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

  onSave()
  {
    this._recipeService.updateRecipe(this.recipe)
      .subscribe(
        response => {
          this.router.navigate(['/cookbook/recipe/view/', this.recipe.Id]);
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
