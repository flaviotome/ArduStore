import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listaDePRodutos: Product[] = [
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

    this.loadProducts().subscribe((products) => {
      this.listaDePRodutos = products;
    });
  }

  /* load de products list from database */
  loadProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  //find an element by its id and returns it
  getProductFromId(id: any) {
    let result: any;
    result = this.listaDePRodutos.find((element) => element._id == id);

    return result;
  }

  /* filters the productList by the type */
  productListTypeFilter(type: string) {
    return this.listaDePRodutos.filter((p) => p.productType == type);
  }

  //return the products list
  getProductList() {
    return this.listaDePRodutos;
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
