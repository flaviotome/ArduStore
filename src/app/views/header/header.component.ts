import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  boardID = '632c79988579518f748d01a8';
  sensorID = '632c9398593e9d634cd6ab3b';
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  openCartPage() {
    this.router.navigateByUrl('/cart');
  }

  setProductListType(productType: string) {
    this.productService.productType = productType;
  }

  getTotalCost() {
    return this.cartService.getTotalCost();
  }

  teste() {
    this.router.navigateByUrl('/productType/board');
  }
}
