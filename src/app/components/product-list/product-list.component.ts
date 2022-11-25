import { CartService } from './../../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  productList: Product[] = [
    {
      _id: '',
      productName: '',
      productPrice: 0,
      productDescription: '',
      productType: '',
      productImg: '',
    },
  ];
  productType = '';
  bannerText = '';

  dataLoaded = false;

  ngOnInit(): void {
    this.dataLoaded = false;
    //refreshes the page when navbar menu has been clicked
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    /* gets the type param from the url (route param) to set what products will be showed */
    this.route.params.subscribe((params) => {
      this.productType = params['type'];
    });

    if (this.productType == '632c79988579518f748d01a8')
      this.bannerText = 'Placas';
    else if (this.productType == '632c9398593e9d634cd6ab3b')
      this.bannerText = 'Sensores';

    this.productService
      .getProductsByType(this.productType)
      .subscribe((products) => {
        this.productList = products;
        this.dataLoaded = true;
      });
  }

  /* adds the selected produtc to the cartServices's list */
  addToCart(id: String) {
    this.productService.getProductFromId(id).subscribe((product) => {
      this.cartService.addToCart(product);
    });
  }

  splitPrice(price: any) {
    return price / 10;
  }
}
