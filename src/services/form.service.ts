import { FormData } from './../models/form-data.model';
import { Injectable } from '@angular/core';


@Injectable()

export class FormService {
    private forms: Array<FormData> = [];

    getAllForms(){
        return this.forms;
    }

    setForms(newForms: Array<FormData>){
        this.forms = newForms;
    }

    getForm(formid: number): FormData {
        let form = this.forms.find((form)=> form.id===formid)
        if(!form){
            form=null;
        }

        return form;
    }
}