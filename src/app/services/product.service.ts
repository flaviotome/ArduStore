import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsList: Product[] = [
    {
      _id: '',
      productName: '',
      productPrice: 0,
      productDescription: '',
      productType: '',
      productImg: '',
    },
  ];

  //list of products where type == board
  boardList: any;
  //list of products where type == sensor
  sensorList: any;
  //ID received from Main page
  productId = '1';

  //used to inform wich type of product list will be opened in the product-list Page
  productType = '';

  url = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
    this.getProducts().subscribe((products) => {
      this.productsList = products;
    });
  }

  /* load de products list from database */
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url );
  }

  //load the products from database filtered by productType.
  getProductsByType(type: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/productType/"+type);
  }

  //find an element by its id and returns it
  getProductFromId(id: any) {
    return this.httpClient.get<Product>("http://localhost:3000/product/"+id);

  }

  /* filters the productList by the type */
  productListTypeFilter(type: string) {
    return this.productsList.filter((p) => p.productType == type);
  }

  //return the products list
  getProductList() {
    return this.productsList;
  }

  //return the products that type == 'board'
  getBoardList() {
    return this.productListTypeFilter('board');
  }

  //return the products that type == 'sensor'
  getSensorList() {
    return this.productListTypeFilter('sensor');
  }
}
