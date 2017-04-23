// import {TestBed} from '@angular/core/testing';
// import {FormGroup, ReactiveFormsModule} from '@angular/forms';
// import { DynamicFormComponent } from './dynamic-form.component';

// describe('dynamicformcomponent', () => {
//     let component: DynamicFormComponent;
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [DynamicFormComponent],
//             imports: [ReactiveFormsModule]
//         });

//         const fixture = TestBed.createComponent(DynamicFormComponent);
//         component = fixture.componentInstance;
//     });

//     it('should have defined a component', ()=> {
//         expect(component).toBeDefined();
//     });
//     it('it should creat a formgroup comprised of formcontrols',()=> {
//         component.ngOnInit();
//         expect(component.formGroup instanceof FormGroup).toBe(true);
//     });
//       it('should create a `FormControl` for each question', () => {
//         component.questions = [
//             {
//                 controlType: 'text',
//                 id: 'first',
//                 label: 'My First',
//                 required: false
//             },
//             {
//                 controlType: 'text',
//                 id: 'second',
//                 label: 'Second!',
//                 required: true
//             }
//         ];
//         component.ngOnInit();

//         expect(Object.keys(component.formGroup.controls)).toEqual([
//             'first', 'second'
//         ]);
//      });

// });