import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, GridModule, ExcelModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
