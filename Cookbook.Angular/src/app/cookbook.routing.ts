import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewRecipeComponent } from './recipe/viewrecipe.component';
import { EditRecipeComponent } from './recipe/editrecipe.component';
import { CreateRecipeComponent } from './recipe/createrecipe.component';
import { DeleteRecipeComponent } from './recipe/deleterecipe.component';

const appRoutes: Routes = [
  { path: 'cookbook', component: HomeComponent },
  { path: 'cookbook/recipe/view/:id', component: ViewRecipeComponent },
  { path: 'cookbook/recipe/edit/:id', component: EditRecipeComponent },
  { path: 'cookbook/recipe/create', component: CreateRecipeComponent },
  { path: 'cookbook/recipe/delete/:id', component: DeleteRecipeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
