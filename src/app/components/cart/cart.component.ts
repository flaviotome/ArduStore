import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  //Remove an item from cart
  removeFromCartList(id: any) {
    this.cartService.deleteFromCart(id);
  }

  //get the cart total cost from the cartService
  getTotalCost() {
    return this.cartService.getTotalCost();
  }

  //get the cart list from cartService
  getCartList() {
    return this.cartService.getCartList();
  }
}
