import { FormListComponent } from './components/form-list/form-list.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RestService } from './services/rest.service';
import { FormService } from './services/form.service';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HttpModule } from "@angular/http";
import { FakeFormsService } from "./services/in-memory.service";
import { FormViewerComponent } from "./components/form-viewer/form-viewer.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicQuestionComponent,
        FormListComponent,
        FormViewerComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(FakeFormsService),
        AppRoutingModule
    ],
    providers: [
        FormService,
        RestService
    ]
})
export class AppModule {}
