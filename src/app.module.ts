import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicQuestionComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [
        
    ]
})
export class AppModule {}
