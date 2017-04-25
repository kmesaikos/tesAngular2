import { FormService } from './../../services/form.service';
import { Component } from '@angular/core';
import { Question, FormData } from '../../models';

@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})

export class AppComponent {
    form: FormData;

    constructor(private formService: FormService) {
        formService.setForms([
            {
                id: 1,
                questions: [
                    {
                        controlType: 'radio',
                        id: 'like',
                        label: 'Do you like motorcycles?',
                        options: [
                            { label: 'Yes', value: 1 },
                            { label: 'of course', value: 2 }
                        ],
                        required: true
                    },
                    {
                        controlType: 'text',
                        id: 'model',
                        label: 'What model do you like?',
                        required: false
                    }

                ],
                title: 'Superbikes'
            },
                 {
            id: 5,
            questions: [
                {
                    controlType: 'select',
                    id: 'type',
                    label: 'What type of motorcycles do you like?',
                    options: [
                        { label: '', value: 'street' },
                        { label: '', value: 'sportbike' },
                        { label: '', value: 'touring' },
                        { label: '', value: 'sport-touring' },
                    ],
                    required: true
                },
                {
                    controlType: 'textarea',
                    id: 'perfecation',
                    label: 'What colors',
                    required: true
                }
            ],
            title: 'hayabusa'
        }
        ]);
        this.form = formService.getForm(1);
    }
}
