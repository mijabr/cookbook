import {Component, Injectable} from '@angular/core';

@Injectable()
export class AppService {

    constructor() {
    }

    setItem(key: string, item : string) {
        localStorage.setItem(key, item);
    }
    
    getItem(key: string) : string {
        return localStorage.getItem(key);
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }
}