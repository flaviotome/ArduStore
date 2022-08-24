import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listaDePRodutos: Product[] = [
    {
      id: '',
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
    this.boardList = this.productListTypeFilter('board');
    this.sensorList = this.productListTypeFilter('sensor');
    this.retornaProdutos().subscribe((products) => {
      this.listaDePRodutos = products;
    });
  }

  getProductFromId(id: any) {
    let result: any;
    result = this.listaDePRodutos.find((element) => element.id == id);

    return result;
  }

  //filters the productList by the type
  productListTypeFilter(type: string) {
    return this.listaDePRodutos.filter((p) => p.productType == type);
  }

  getProductList() {
    return this.listaDePRodutos;
  }

  getBoardList() {
    return this.productListTypeFilter('board');
  }

  getSensorList() {
    return this.productListTypeFilter('sensor');
  }

  retornaProdutos(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
