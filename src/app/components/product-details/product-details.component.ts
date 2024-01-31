import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productList: Array<Product> = new Array<Product>();

  constructor(  private route:ActivatedRoute , private productService:ProductService) { 

  }

  ngOnInit(): void {
    this.productService.addProducts({ id: 1, name: 'Product 1', price: 10, description: 'This is product 1' });
    this.productService.addProducts({ id: 2, name: 'Product 2', price: 20, description: 'This is product 2' });
    this.productService.addProducts({ id: 3, name: 'Product 3', price: 30, description: 'This is product 3' });
    this.productService.addProducts({ id: 4, name: 'Product 4', price: 40, description: 'This is product 4' });
    this.productService.addProducts({ id: 5, name: 'Product 5', price: 50, description: 'This is product 5' });
    this.productList=(this.productService.getProducts());
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = this.productList.find(p => p.id === productId);

  }

}
