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
import { AuthService } from './service/auth.service';
import { AppService } from './service/app.service';
import { IRecipe } from './model/recipe';
import { RecipeService } from './service/recipe.service';

import '../favicon.ico';
import '../assets/pizza01_1024.jpg';
import '../assets/chickenpie01_1024.jpg';
import '../assets/spicybeef01_1024.jpg';
import '../assets/icon/ic_add_box_black_24px.svg';
import '../assets/icon/ic_delete_forever_black_24px.svg';
import '../assets/icon/ic_account_box_black_24px.svg';

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
  providers:[
    AppService,
    AuthService,
    RecipeService
  ],
  bootstrap: [ CookbookAppComponent ]
})
export class CookbookModule { }
