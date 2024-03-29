import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.addProducts({ id: 1, name: 'Product 1', price: 10, description: 'This is product 1' });
    this.productService.addProducts({ id: 2, name: 'Product 2', price: 20, description: 'This is product 2' });
    this.productService.addProducts({ id: 3, name: 'Product 3', price: 30, description: 'This is product 3' });
    this.productService.addProducts({ id: 4, name: 'Product 4', price: 40, description: 'This is product 4' });
    this.productService.addProducts({ id: 5, name: 'Product 5', price: 50, description: 'This is product 5' });

    this.ProductList = this.productService.getProducts();
  }
  shareAlert(product: Product) {
    alert(`You will be notified when the ${product.name} goes on sale`);
  }

}
