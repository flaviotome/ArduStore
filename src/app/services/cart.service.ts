import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any[] = [];
  totalCost = 0;

  constructor() {}

  addToCart(produto: any) {
    this.cartList.push(produto);
    this.getTotalCost();
    return this.cartList;
  }

  deleteFromCart(id: any) {
    //removes an item of the cart
    this.cartList.splice(
      this.cartList.findIndex((e) => e.productId == id),
      1
    );

    this.getTotalCost();
  }

  getCartList() {
    return this.cartList;
  }

  getTotalCost() {
    //calculates the total value of the cart
    this.totalCost = 0;
    for (let i of this.cartList) {
      this.totalCost = this.totalCost + Number(i.productPrice);
    }

    return this.totalCost;
  }
}
