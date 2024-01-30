import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() shareProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
