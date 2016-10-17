import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { IRecipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import '../array.extension'

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
    iconRegistry.addSvgIcon('add', 'assets/icon/ic_add_box_black_24px.svg');
    iconRegistry.addSvgIcon('delete', 'assets/icon/ic_delete_forever_black_24px.svg');
  }

  theid : number;
  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.route.params.forEach((params: Params) => {
      this.theid = +params['id'];
      this._recipeService.getRecipe(this.theid)
        .subscribe(recipe => this.selectedRecipe = recipe);
    });
  }

  onSave()
  {
    this._recipeService.updateRecipe(this.selectedRecipe)
      .subscribe(
        response => {
          this.router.navigate(['/recipe/view/', this.selectedRecipe.Id]);
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
