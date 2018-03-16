import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Jsonp, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { EditService } from './edit.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        JsonpModule,
        BrowserModule,
        ReactiveFormsModule,
        GridModule,
        InputsModule,
        DropDownsModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            deps: [Jsonp],
            provide: EditService,
            useFactory: (jsonp: Jsonp) => () => new EditService(jsonp)
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

