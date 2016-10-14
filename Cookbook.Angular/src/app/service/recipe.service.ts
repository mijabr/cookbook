import {Component, Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable"
import {IRecipe} from '../model/recipe';
import {MockRecipes} from './recipe.mock';
import '../array.extension'

@Injectable()
export class RecipeService {

    constructor(private _http: Http) {
    }
    
    recipes : IRecipe[];
    recipe : IRecipe[];
    static nextMockId : number = 4;

    getRecipes() : Observable<IRecipe[]> {
        if (process.env.ENV === 'production') {
            return this._http.get("api/recipe")
                .map(response => <IRecipe[]>response.json());
        }
        else {
            return Observable.of(MockRecipes);
        }
    }
    
    getRecipe(id : number) : Observable<IRecipe> {
        if (process.env.ENV === 'production') {
            return this._http.get("api/recipe/" + String(id))
                .map(response => <IRecipe>response.json());
        }
        else {
            return Observable.of(MockRecipes.find(r => r.Id == id));
        }
    }

    updateRecipe(recipe : IRecipe) : Observable<any> {
        if (process.env.ENV === 'production') {
            let body = JSON.stringify(recipe);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put("api/recipe", body, options);
        }
        else {
            return Observable.of(MockRecipes[recipe.Id-1]);
        }
    }

    addRecipe(recipe : IRecipe) : Observable<any> {
        if (process.env.ENV === 'production') {
            let body = JSON.stringify(recipe);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post("api/recipe", body, options);
        }
        else {
            recipe.Id = this.getNextMockId();
            MockRecipes.push(recipe);
            return Observable.of(recipe);
        }
    }

    deleteRecipe(id : number) : Observable<any> {
        if (process.env.ENV === 'production') {
            return this._http.delete("api/recipe/" + String(id))
        }
        else {
            var r : IRecipe = MockRecipes.find(r => r.Id == id);
            MockRecipes.remove(r);
            return Observable.of("deleted");
        }
    }

    getNextMockId() : number {
        RecipeService.nextMockId = RecipeService.nextMockId + 1;
        return RecipeService.nextMockId - 1;
    }
}
