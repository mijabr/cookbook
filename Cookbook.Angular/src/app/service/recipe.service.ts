import { Component, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { IRecipe } from '../model/recipe';
import { MockRecipes } from './recipe.mock';
import '../array.extension'

@Injectable()
export class RecipeService {
    constructor(private http: Http,
                private authService: AuthService) {
    }

    recipes: IRecipe[];
    recipe: IRecipe[];
    static nextMockId: number = 4;

    createRequestOptions() : RequestOptions {
        return new RequestOptions({ headers: this.createHeader() });
    }

    createHeader(): Headers {
        var header = new Headers({ 'Content-Type': 'application/json' });
        this.addAuthorisationHeader(header);
        return header;
    }

    addAuthorisationHeader(headers: Headers): void {
        headers.append('Authorization', 'Bearer ' + this.authService.getToken())
    }

    getRecipes(): Observable<IRecipe[]> {
        if (process.env.ENV === 'production') {
            return this.http.get("api/recipe", this.createRequestOptions())
                .map(response => <IRecipe[]>response.json());
        }
        else {
            return Observable.of(MockRecipes);
        }
    }

    getRecipe(id: number): Observable<IRecipe> {
        if (process.env.ENV === 'production') {
            return this.http.get("api/recipe/" + String(id), this.createRequestOptions())
                .map(response => <IRecipe>response.json());
        }
        else {
            return Observable.of(MockRecipes.find(r => r.Id == id));
        }
    }

    updateRecipe(recipe: IRecipe): Observable<any> {
        if (process.env.ENV === 'production') {
            let body = JSON.stringify(recipe);
            return this.http.put("api/recipe", body, this.createRequestOptions());
        }
        else {
            return Observable.of(MockRecipes[recipe.Id - 1]);
        }
    }

    addRecipe(recipe: IRecipe): Observable<any> {
        if (process.env.ENV === 'production') {
            let body = JSON.stringify(recipe);
            return this.http.post("api/recipe", body, this.createRequestOptions());
        }
        else {
            recipe.Id = this.getNextMockId();
            MockRecipes.push(recipe);
            return Observable.of(recipe);
        }
    }

    deleteRecipe(id: number): Observable<any> {
        if (process.env.ENV === 'production') {
            return this.http.delete("api/recipe/" + String(id), this.createRequestOptions())
        }
        else {
            var r: IRecipe = MockRecipes.find(r => r.Id == id);
            MockRecipes.remove(r);
            return Observable.of("deleted");
        }
    }

    getNextMockId(): number {
        RecipeService.nextMockId = RecipeService.nextMockId + 1;
        return RecipeService.nextMockId - 1;
    }
}
