import { AppModule } from './ng.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
