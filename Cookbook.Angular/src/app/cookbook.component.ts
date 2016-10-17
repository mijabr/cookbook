import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { Router }   from '@angular/router';
import { MdIconRegistry } from '@angular/material';
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

@Component({
  selector: 'cookbook-app',
  template: require('./cookbook.component.html'),
  styles: [require('./cookbook.component.css')]
})
export class CookbookAppComponent implements OnInit {

  constructor(private router : Router,
              private iconRegistry : MdIconRegistry,
              private recipeService: RecipeService,
              private appService: AppService,
              private authService: AuthService,
              private appRef : ApplicationRef)
  {
    appService.setItem('appTitle','Cookbook');
    iconRegistry.addSvgIcon('add', 'assets/icon/ic_add_box_black_24px.svg');
    iconRegistry.addSvgIcon('account box', 'assets/icon/ic_account_box_black_24px.svg');
  }

  recipes: IRecipe[];
  appTitle: string;
  givenName : string;

  ngOnInit()
  {
    this.recipeService.getRecipes()
      .subscribe(response => this.recipes = response);
    this.appTitle = this.appService.getItem('appTitle');
    this.updateLoginGreeting();
    this.authService.authEvents.subscribe(
      str => {
        this.updateLoginGreeting();
        this.appRef.tick();
        //alert(str);
      }
    )
  }

  login()
  {
    this.authService.login();
  }

  logout()
  {
    this.authService.logout();
  }

  isLoggedIn() : boolean
  {
    return this.authService.isLoggedIn();
  }

  updateLoginGreeting()
  {
    var profile = JSON.parse(this.authService.getProfile());
    if (profile != null)
    {
      this.givenName = profile.given_name;
    }
    else
    {
      this.givenName = '';
    }
  }
}
