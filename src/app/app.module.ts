import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertComponent } from './components/product-alert/product-alert.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
