import { FormData } from './../models/form-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";


@Injectable()

export class FormService {
    forms = new BehaviorSubject<Array<FormData>>([]);

    getAllForms(){
        return this.forms;
    }

    setForms(newForms: Array<FormData>){
        this.forms.next(newForms);
    }

    getForm(formId: number): FormData {
        let form = this.forms.value.find((form) => form.id === formId);
        if (!form) {
            form = null;
        }
        return form;
    }
}