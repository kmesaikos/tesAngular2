import { FormData } from './../../models/form-data.model';
import { FormService } from './../../services/form.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'form-list',
    template: require("./form-list.component.html"),
    styles: []
})

export class FormListComponent {
    forms: Array<FormData> = [];
    
    constructor(private formService: FormService, private router: Router) {
        this.formService.forms
            .subscribe((forms) => this.forms = forms);
     }

    displayForm(id: number) {
        this.router.navigateByUrl(`/form/${id}`);
    }
}