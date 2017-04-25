import { RestService } from './services/rest.service';
import { FormService } from './services/form.service';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HttpModule } from "@angular/http";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicQuestionComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        FormService,
        RestService        
    ]
})
export class AppModule {}
