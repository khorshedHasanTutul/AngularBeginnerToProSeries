import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Items: Product[] = [];
  
  addToCart(product: Product)
  {
    debugger
    this.Items.push(product);
  }
  getItems()
  {
    return this.Items;
  }
  clearCart()
  {
    this.Items = [];
    return this.Items;
  }
  constructor() { }
}


// angular introduction compleete