import { async, getTestBed, TestBed } from "@angular/core/testing";
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RestService } from './rest.service';
import { FormData } from '../models';

describe('Service: RestService', () => {
    let backend: MockBackend;
    let service: RestService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                RestService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(RestService);
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === 'api/forms') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);
                connection.mockRespond(response);
            }
        });
    }
    it('should return the lists of forms from the server on success', () => {
        setupConnections(backend, {
            body: [
                {
                    id: 1,
                    questions: [],
                    title: 'Motorbikes'
                },
                {
                    id: 4,
                    questions: [],
                    title: 'Cars'
                },
                {
                    id: 2,
                    questions: [],
                    title: 'Women'
                }
            ],
            status: 200
        });
        service.getForms().subscribe((data: any) => {
            expect(data.length).toBe(3);
            expect(data[0].title).toBe('MotorBikes');
            expect(data[0].title).toBe('Cars');
            expect(data[0].title).toBe('Women');
        });
    });

    it('should log error to the console', () => {
        setupConnections(backend, {
            body: { error: `error error` },
            status: 500
        });
        spyOn(console, 'error');

        service.getForms().subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith(`error error`);
        });
    });
});


