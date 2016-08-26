import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  selector: 'deleterecipe',
  template: require('./deleterecipe.component.html'),
  styles: [require('./deleterecipe.component.css')],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, FORM_DIRECTIVES],
  providers: [RecipeService]
})
export class DeleteRecipeComponent implements OnInit {
  
  constructor(private _recipeService : RecipeService,
              private _router : Router,
              private _params : RouteParams)
  {
  }

  selectedRecipe : IRecipe;
  deleteRecipeText : String;

  ngOnInit()
  {
    var id = +this._params.get('id');
    this._recipeService.getRecipe(id)
      .subscribe(recipe => this.selectedRecipe = recipe);
  }

  onDelete()
  {
    if (this.deleteRecipeText == "DELETE")
    {
      this._recipeService.deleteRecipe(this.selectedRecipe.Id)
        .subscribe(
          response => {
            this._router.navigate(['Home']);
            },
          error => {
            alert(error.text());
            console.log(error.text());
          }
        )
    }
  }
}
