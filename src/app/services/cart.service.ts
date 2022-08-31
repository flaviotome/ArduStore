import { Product } from './../models/product';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  totalCost = 0;
  constructor(private localStorageService: LocalStorageService) {
    /* get the list stored in the browser's Local Store  */
    this.cartList = this.localStorageService.getItem('cartList');
  }

  addToCart(produto: Product) {
    /* adds the new product in the cart list */
    this.cartList.push(produto);
    /* adds the new product in the local storage */
    this.localStorageService.setItem('cartList', this.cartList);
    this.getTotalCost();
    return this.cartList;
  }

  deleteFromCart(id: any) {
    //removes an item of the cart
    this.cartList.splice(
      this.cartList.findIndex((e) => e._id == id),
      1
    );
    this.localStorageService.setItem('cartList', this.cartList);
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
