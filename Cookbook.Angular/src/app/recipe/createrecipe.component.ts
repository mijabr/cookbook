import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { MdIconRegistry } from '@angular/material'
import { IRecipe, Recipe, IIngredient } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
import '../array.extension'

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
    iconRegistry.addSvgIcon('add', 'assets/icon/ic_add_box_black_24px.svg');
    iconRegistry.addSvgIcon('delete', 'assets/icon/ic_delete_forever_black_24px.svg');
  }

  selectedRecipe : IRecipe;

  ngOnInit()
  {
    this.selectedRecipe = new Recipe();
  }


  onSave()
  {
    this.recipeService.addRecipe(this.selectedRecipe)
      .subscribe(
        response => {
          if (this.selectedRecipe.Id != 0)
          {
            this.router.navigate(['/recipe/view/', this.selectedRecipe.Id]);
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
    this.selectedRecipe.Ingredients.push(<IIngredient>{});
  }

  onRemoveIngredient(ingredient : IIngredient)
  {
    this.selectedRecipe.Ingredients = this.selectedRecipe.Ingredients.remove(ingredient);
  }
}
