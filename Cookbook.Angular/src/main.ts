import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CookbookAppComponent } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {disableDeprecatedForms, provideForms} from '@angular/forms'; 
require('zone.js');
if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(CookbookAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,disableDeprecatedForms(),provideForms()]);

