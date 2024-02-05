import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';

const routes: Routes = [
  { path: '', component:ProductListComponent , pathMatch: 'full'},
  { path: 'products/:productId', component: ProductDetailsComponent },
  {path: 'cart', component:CartComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
