import { CartService } from './../../services/cart.service';
import { CartComponent } from './../cart/cart.component';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productComponentProductId: String; //loaded from ProductService
  product = {
    _id: '',
    productName: '',
    productPrice: 0,
    productDescription: '',
    productType: '',
    productImg: '',
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    //loads the product Id from the ProductService
    this.productComponentProductId = this.productService.productId;
  }

  ngOnInit(): void {
    this.product = this.productService.getProductFromId(
      this.productService.productId
    );
  }

  addToCart(id: String) {
    this.cartService.addToCart(this.productService.getProductFromId(id));
  }

  splitPrice(price: any) {
    return price / 10;
  }
}
