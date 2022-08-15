import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {} from '@fortawesome/fontawesome-svg-core';

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

  ngOnInit(): void {}

  showProductListPage(type: String) {
    this.router.navigateByUrl('/productList');
  }

  //receives the id of the DIV that was selected, sends the ID to Service and opens the Product page
  showProductPage($event: any) {
    $event.stopPropagation();
    this.productService.productId = $event.target.id;
    this.router.navigateByUrl('/product');
  }

  showProductPage2(id: any) {
    this.productService.productId = id;
    this.router.navigateByUrl('/product');
  }

  //adds the selected produtc in the cartServices's list
  addToCart(id: String) {
    this.cartService.addToCart(this.productService.getProductFromId(id));
  }

  getBoardList() {
    return this.productService.getBoardList();
  }
  getSensorList() {
    return this.productService.getSensorList();
  }
  getProductList() {
    return this.productService.getProductList();
  }

  splitPrice(price: any) {
    return price / 10;
  }
}
