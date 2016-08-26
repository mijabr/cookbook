import { Component, OnInit, Input } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { IRecipe } from './model/recipe';
import { AppService } from './service/app.service';
import { RecipeService } from './service/recipe.service';
import { HomeComponent } from './home/home.component';
import { ViewRecipeComponent } from './recipe/viewrecipe.component';
import { EditRecipeComponent } from './recipe/editrecipe.component';
import { CreateRecipeComponent } from './recipe/createrecipe.component';
import { DeleteRecipeComponent } from './recipe/deleterecipe.component';

import '../favicon.ico';
import '../assets/pizza01_1024.jpg';
import '../assets/chickenpie01_1024.jpg';
import '../assets/spicybeef01_1024.jpg';
import '../assets/icon/ic_add_box_black_24px.svg';
import '../assets/icon/ic_delete_forever_black_24px.svg';

declare var Auth0Lock: any;

@Component({
  selector: 'cookbook-app',
  template: require('./cookbook.component.html'),
  styles: [require('./cookbook.component.css')],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton, MdAnchor,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdIcon,
    ViewRecipeComponent, EditRecipeComponent],
  providers: [MdIconRegistry, AppService, RecipeService]
})
export class CookbookAppComponent implements OnInit {

  constructor(
    private _recipeService: RecipeService,
    private _appService: AppService,
    private _router: Router
  ) {
    _router.config([
      { path: '/', name: "Home", component: HomeComponent, useAsDefault: true },
      { path: '/recipe/:id', name: "ViewRecipe", component: ViewRecipeComponent },
      { path: '/recipe/edit/:id', name: "EditRecipe", component: EditRecipeComponent },
      { path: '/recipe/create', name: "CreateRecipe", component: CreateRecipeComponent },
      { path: '/recipe/delete/:id', name: "DeleteRecipe", component: DeleteRecipeComponent },
    ]);
      _appService.setItem('title','Cookbook');
      _appService.setItem('givenName','');
  }

  recipes: IRecipe[];
  title: string;
  devLogin: boolean = false;

  lock = new Auth0Lock('0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7', 'michael-brydie.au.auth0.com');

  ngOnInit() {
    this._recipeService.getRecipes()
      .subscribe(response => this.recipes = response);
    this.title = this._appService.getItem('title');
  }

  doLogin() {
    this.login();
    this._router.renavigate();
  }

  doLogout() {
    this.logout();
    this._router.renavigate();
  }

  // Google client ID
  // 986625760223-6vmdd97qfv2o27kf6n1in6ecnnsvh7a3.apps.googleusercontent.com
  // Secret
  // 1BnSTcPOICuFfNhYm4Kv3Mx_
  login() {
    if (process.env.ENV === 'production') {
      this.lock.show({}, (err: any, profile: any, token: any) => {
        if (err) {
          alert(err);
          return;
        }
        // If authentication is successful, save the items
        // in local storage
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
        //this.zoneImpl.run(() => this.user = profile);
        this._appService.setItem('givenName', profile.given_name);
      });
    }
    else {
      this.devLogin = true;
      this._appService.setItem('givenName','Bob');
    }
  }


  logout() {
    this._appService.setItem('givenName','');
    if (process.env.ENV === 'production') {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
    }
    else {
      this.devLogin = false;
    }
  }

  loggedIn() {
    if (process.env.ENV === 'production') {
      return tokenNotExpired();
    }
    else {
      return this.devLogin;
    }
  }
}
//	{"email":"michael.brydie@gmail.com","email_verified":true,"name":"Michael Brydie","given_name":"Michael","family_name":"Brydie","picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","gender":"male","locale":"en","clientID":"0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7","updated_at":"2016-06-18T01:52:45.306Z","user_id":"google-oauth2|115840693890092937292","nickname":"michael.brydie","identities":[{"provider":"google-oauth2","access_token":"ya29.Ci8FAwyNYDVERIRm6Z9tm3m-cvilB2F9K-HLFE3nrEnvdDC3EUyqjKkRuMdbrZkYWg","expires_in":3600,"user_id":"115840693890092937292","connection":"google-oauth2","isSocial":true}],"created_at":"2016-06-18T01:18:51.014Z","global_client_id":"yNgSEs0agjHuyTnICMNxIjeWFbXEgL99"}
