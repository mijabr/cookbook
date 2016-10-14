import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CookbookAppComponent } from './cookbook.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipecard/recipecard.component';
import { ViewRecipeComponent } from './recipe/viewrecipe.component';
import { EditRecipeComponent } from './recipe/editrecipe.component';
import { CreateRecipeComponent } from './recipe/createrecipe.component';
import { DeleteRecipeComponent } from './recipe/deleterecipe.component';
import { routing } from './cookbook.routing';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule,
      routing,
      MaterialModule.forRoot()
    ],
  declarations: [
      CookbookAppComponent,
      HomeComponent,
      RecipeCardComponent,
      ViewRecipeComponent,
      EditRecipeComponent,
      CreateRecipeComponent,
      DeleteRecipeComponent
    ],
  bootstrap: [ CookbookAppComponent ]
})
export class CookbookModule { }
