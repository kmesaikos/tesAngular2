import { FormData } from './../models/form-data.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Injectable()
export class RestService {
    constructor(private http: Http) { }

    getForms() {
        return this.http.get('api/forms')
            .map((response) => {
                if (response.ok) {
                    response.json() as FormData[];
                } else {
                    return this.logError(response);
                }
            });
    }

    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch (e) {
            console.error(error);
        }
        return Observable.throw(error);
    }
}