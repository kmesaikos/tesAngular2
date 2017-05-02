import { ReactiveFormsModule } from '@angular/forms';
import { DynamicQuestionComponent } from './../dynamic-question/dynamic-question.component';
import { DynamicFormComponent } from './../dynamic-form/dynamic-form.component';
import { TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { FormService } from "../../services/form.service";
import { ActivatedRoute } from "@angular/router";
import { inject } from "@angular/core/testing";
import { MockActivatedRoute } from "../../mocks/activated-route";
import { FormViewerComponent } from "./form-viewer.component";


describe('Component: FormViewerComponent', () => {
    const createComponent = () => {
        const fixture = TestBed.createComponent(FormViewerComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    };
    let activeRoute: MockActivatedRoute;
    let component: FormViewerComponent;

    beforeEach(() => {
        activeRoute = new MockActivatedRoute();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormViewerComponent,
                DynamicFormComponent,
                DynamicQuestionComponent
            ],
            imports: [
                ReactiveFormsModule
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activeRoute },
                FormService
            ]
        });
    }));

    it('should have a defined component', () => {
        createComponent();
        expect(component).toBeDefined();
    });

    it('should call `FormService.getForm` when the route ID changes', inject([FormService], (formService: FormService) => {
        spyOn(formService, 'getForm').and.returnValue({ questions: [] });
        activeRoute.testParams = { id: 1234 };
        createComponent();
        formService.forms.next([]);

        expect(formService.getForm).toHaveBeenCalledWith(1234);
    }));
});