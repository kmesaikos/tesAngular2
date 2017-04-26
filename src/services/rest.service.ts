import { FormData } from './../models/form-data.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestService {
    constructor(private http: Http) { }

     getForms() {
        return this.http.get('api/forms')
                .map((response) => {
                    const json = response.json();

                    if (response.ok) {
                        return json.data as FormData[];
                    } else {
                        return this.logError(json);
                    }
                });
    }

    private logError(error: any) {
        console.error(error.error);
        throw error;
    }
}