import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  productList: any;
  productType = '';
  productTypeH1 = '';

  ngOnInit(): void {
    this.productType = this.productService.productType;
    if (this.productType == 'board') {
      this.productList = this.getBoardList();
      this.productTypeH1 = 'Placas';
    } else if (this.productType == 'sensor') {
      this.productList = this.getSensorList();
      this.productTypeH1 = 'Sensores';
    }
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

  splitPrice(price: any){
    return price/10
  }
}
