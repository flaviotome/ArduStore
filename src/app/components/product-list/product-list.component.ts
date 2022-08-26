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

    //gets the type param from the url (route param) to set what products will be showed
    this.route.params.subscribe((params) => {
      this.productType = params['type'];
    });

    this.productService
      .getProductsByType(this.productType)
      .subscribe((products) => {
        this.productList = products;
      });
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

  splitPrice(price: any) {
    return price / 10;
  }
}
