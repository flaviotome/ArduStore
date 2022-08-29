import { CartService } from './../../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

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
  productTypeH1 = '';

  ngOnInit(): void {
    //refreshes the page when navbar menu has been clicked
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    /* gets the type param from the url (route param) to set what products will be showed */
    this.route.params.subscribe((params) => {
      this.productType = params['type'];
    });

    this.productService
      .getProductsByType(this.productType)
      .subscribe((products) => {
        this.productList = products;
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
