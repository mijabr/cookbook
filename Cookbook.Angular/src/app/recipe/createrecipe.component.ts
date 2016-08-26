import { Component, OnInit } from '@angular/core';
import { RouteParams, RouteConfig, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IRecipe, Recipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import '../array.extension'

@Component({
  selector: 'createrecipe',
  template: require('./createrecipe.component.html'),
  styles: [require('./createrecipe.component.css')],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    FORM_DIRECTIVES,
    MdIcon
    ],
  providers: [RecipeService],
  viewProviders: [MdIconRegistry]
})
export class CreateRecipeComponent implements OnInit {
  
  constructor(private _recipeService : RecipeService,
              private _params : RouteParams,
              private _router : Router,
              private mdIconRegistry : MdIconRegistry)
  {
    mdIconRegistry
        .addSvgIcon('add', '/assets/icon/ic_add_box_black_24px.svg')
        .addSvgIcon('delete', '/assets/icon/ic_delete_forever_black_24px.svg');
  }

  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.selectedRecipe = new Recipe();
  }

  onSave()
  {
    this._recipeService.addRecipe(this.selectedRecipe)
      .subscribe(
        response => {
          alert(this.selectedRecipe.Id);
          if (this.selectedRecipe.Id != 0)
          {
            let url = 'recipe/' + this.selectedRecipe.Id;
            this._router.navigate(['ViewRecipe', { id: this.selectedRecipe.Id}]);
          }
          else {
            this._router.navigate(['Home']);
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
    this.selectedRecipe.Ingredients.push(<IIngredient>{});
  }

  onRemoveIngredient(ingredient : IIngredient)
  {
    this.selectedRecipe.Ingredients = this.selectedRecipe.Ingredients.remove(ingredient);
  }
}
