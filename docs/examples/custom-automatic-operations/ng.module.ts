import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { ProductsBindingDirective } from './remote-binding.directive';
import { ProductsService } from './northwind.service';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule, HttpClientModule ],
  declarations: [ AppComponent, ProductsBindingDirective ],
  providers: [ ProductsService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
