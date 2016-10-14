import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'deleterecipe',
  template: require('./deleterecipe.component.html'),
  styles: [require('./deleterecipe.component.css')]
})
export class DeleteRecipeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _recipeService : RecipeService)
  {
  }

  selectedRecipe : IRecipe;
  deleteRecipeText : String;

  ngOnInit()
  {
    this.route.params.forEach((params : Params) => {
      let id = +params['id'];
      this._recipeService.getRecipe(id)
        .subscribe(recipe => this.selectedRecipe = recipe);
    });
  }

  onDelete()
  {
    if (this.deleteRecipeText == "DELETE")
    {
      this._recipeService.deleteRecipe(this.selectedRecipe.Id)
        .subscribe(
          response => {
            this.router.navigate(['/']);
            },
          error => {
            alert(error.text());
            console.log(error.text());
          }
        )
    }
  }
}
