import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  boardList: any;
  sensorList: any;

  ngOnInit(): void {
    /* load the boards from database */
    this.productService.getProductsByType('board').subscribe((products) => {
      this.boardList = products;
    });

    /* load the sensors from database */
    this.productService.getProductsByType('sensor').subscribe((products) => {
      this.sensorList = products;
    });
  }

  /* adds the selected produtc to the cartServices's list */
  addToCart(id: String) {
    this.productService.getProductFromId(id).subscribe((product) => {
      this.cartService.addToCart(product);
    });
  }

  getBoardList() {
    return this.boardList;
  }
  getSensorList() {
    return this.sensorList;
  }

  /* split the productPrice atribute for credit card payment*/
  splitPrice(price: any) {
    return price / 10;
  }
}
