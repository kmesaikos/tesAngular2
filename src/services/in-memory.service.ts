import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeFormsService implements InMemoryDbService {
    createDb() {
        const forms = [
            {
                id: 1,
                questions: [
                    {
                        controlType: 'radio',
                        id: 'answer',
                        label: 'Do you like motorcycles?',
                        options: [
                            { label: 'Yes', value: 'yes' },
                            { label: 'No', value: 'no' }
                        ],
                        required: true
                    },

                    {
                        controlType: 'select',
                        id: 'type',
                        label: 'What type of motorcycles do you like?',
                        options: [
                            { label: 'street', value: 'street' },
                            { label: 'sportbike', value: 'sportbike' },
                            { label: 'touring', value: 'touring' },
                            { label: 'sport-touring', value: 'sport-touring' },
                        ],
                        required: false
                    },
                    {
                        controlType: 'textarea',
                        id: 'topSpeed',
                        label: 'What was the top speed on your bike:',
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
                        label: 'What is a best woman for you?',
                        options: [
                            { label: 'clever', value: 'clever' },
                            { label: 'beautiful', value: 'beautiful' },
                            { label: 'social', value: 'social' },
                            { label: 'carrier Woman', value: 'carrierWoman' }
                        ],
                        required: true
                    },
                    {
                        controlType: 'textarea',
                        id: 'choice',
                        label: 'Tell us the name of your best choice:',
                        required: true
                    }
                ],
                title: 'Women'
            }
        ];

        return { forms };
    }
}