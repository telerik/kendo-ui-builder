import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { CategoriesService } from './northwind.service';

enableProdMode();

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule, HttpModule ],
  declarations: [ AppComponent ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
