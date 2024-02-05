import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  cartItems:Product[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

}
