import { Component, OnInit } from '@angular/core';
import { RouteParams, RouteConfig, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IRecipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import '../array.extension'

@Component({
  selector: 'editrecipe',
  template: require('./editrecipe.component.html'),
  styles: [require('./editrecipe.component.css')],
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
export class EditRecipeComponent implements OnInit {
  
  constructor(private _recipeService : RecipeService,
              private _params : RouteParams,
              private _router : Router,
              private mdIconRegistry : MdIconRegistry)
  {
    mdIconRegistry
        .addSvgIcon('add', '/assets/icon/ic_add_box_black_24px.svg')
        .addSvgIcon('delete', '/assets/icon/ic_delete_forever_black_24px.svg');
  }

  theid : number;
  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.theid = +this._params.get('id');
    this._recipeService.getRecipe(this.theid)
      .subscribe(recipe => this.selectedRecipe = recipe);
  }

  onSave()
  {
    this._recipeService.updateRecipe(this.selectedRecipe)
      .subscribe(
        response => {
          let url = 'recipe/' + this.selectedRecipe.Id;
          this._router.navigate(['ViewRecipe', { id: this.selectedRecipe.Id}]);
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
