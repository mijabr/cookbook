import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { IRecipe } from '../model/recipe';
import { RecipeService } from '../service/recipe.service';
var publicPath = require('./../../../config/publicPath');

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

  recipe : IRecipe;
  pics : any = [];
  deleteRecipeText : String;

  ngOnInit()
  {
    this.route.params.forEach((params : Params) => {
      let id = +params['id'];
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

  onDelete()
  {
    if (this.deleteRecipeText == "DELETE")
    {
      this._recipeService.deleteRecipe(this.recipe.Id)
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
