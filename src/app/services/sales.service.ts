import { Sale } from './../models/sale';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private httpclient: HttpClient) {}

  sale: Sale = {
    _id: '',
    totalCost: 0,
    productsList: [],
    userId: '',
    dateTime: new Date(),
  };

  newSale() {}
}
