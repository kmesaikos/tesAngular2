import { FormService } from './form.service';
import { FormData } from '../models';

describe('Service: formService', () => {
    const testForms: Array<FormData> = [
        {
            id: 2,
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
    ];
    let service: FormService;

    beforeEach(() => {
        service = new FormService();
    });

    it('#getAllForms should,by default, return an empty array', () => {
        expect(service.getAllForms()).toEqual([]);
    });
     it('#setForms should set the `forms` attribute', () => {
        service.setForms(testForms);

        expect(service.getAllForms()).toEqual(forms);
    });

    describe('#getForm', () => {
        beforeEach(()=>{
            service.setForms(testForms);
        });
        it('should return the form matching the provided id', () => {
            expect(service.getForm(5)).toEqual(testForms[1]);
            expect(service.getForm(2)).toEqual(testForms[0]);
        });

           it('should return `null` if it does NOT find a form matching the provided ID', () => {
            expect(service.getForm(1)).toBeNull();
            expect(service.getForm(null)).toBeNull();
            expect(service.getForm(0)).toBeNull();
        });
    });
});