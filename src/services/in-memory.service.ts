import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeFormsService implements InMemoryDbService {
    createDb() {
        const forms = [
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
                        controlType: 'select',
                        id: 'type',
                        label: 'What type of motorcycles do you like?',
                        options: [
                            { label: '', value: 'street' },
                            { label: 'sportbike1', value: 'sportbike' },
                            { label: 'touring2', value: 'touring' },
                            { label: 'sport-touring3', value: 'sport-touring' },
                        ],
                        required: false
                    },
                    {
                        controlType: 'textarea',
                        id: 'more',
                        label: 'Gives us your thoughts on pizza:',
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
                        id: 'delicious',
                        label: 'What is the best cheese for a burger?',
                        options: [
                            { label: '', value: 'no-cheese' },
                            { label: 'American', value: 'american' },
                            { label: 'Cheddar', value: 'cheddar' },
                            { label: 'Provolone', value: 'provolone' },
                            { label: 'Swiss', value: 'swiss' }
                        ],
                        required: true
                    },
                    {
                        controlType: 'textarea',
                        id: 'perfection',
                        label: 'Describe your perfect burger:',
                        required: true
                    }
                ],
                title: 'Burger Bonanza'
            }
        ];

        return { forms };
    }
}