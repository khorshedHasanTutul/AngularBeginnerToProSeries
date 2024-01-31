import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product> = new Array<Product>();
  constructor() { }
  getProducts(): Product[] {
    return this.productList;
  }
  addProducts(product: Product) {
    this.productList.push(product);
  }
}
