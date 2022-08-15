import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList = [
    {
      productId: '1',
      productName: 'Arduino Uno',
      productPrice: '70',
      productDescription:
        "Arduino Uno is a microcontroller board based on the ATmega328P (datasheet). It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator (CSTCE16M0V53-R0), a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.. You can tinker with your Uno without worrying too much about doing something wrong, worst case scenario you can replace the chip for a few dollars and start over again 'Uno' means one in Italian and was chosen to mark the release of Arduino Software (IDE) 1.0. The Uno board and version 1.0 of Arduino Software (IDE) were the reference versions of Arduino, now evolved to newer releases. The Uno board is the first in a series of USB Arduino boards, and the reference model for the Arduino platform; for an extensive list of current, past or outdated boards see the Arduino index of boards.",
      productType: 'board',
      productImg: '/assets/carrossel/arduino_uno.jpg',
    },
    {
      productId: '2',
      productName: 'Arduino Mega',
      productPrice: '140',
      productDescription:
        'The 8-bit board with 54 digital pins, 16 analog inputs, and 4 serial ports.',
      productType: 'board',
      productImg: '/assets/carrossel/arduino_mega.jpg',
    },
    {
      productId: '3',
      productName: 'Arduino Nano',
      productPrice: '50',
      productDescription:
        "The Arduino Nano is Arduino's classic breadboard friendly designed board with the smallest dimensions. The Arduino Nano comes with pin headers that allow for an easy attachment onto a breadboard and features a Mini-B USB connector.",
      productType: 'board',
      productImg: '/assets/carrossel/arduino_nano.jpg',
    },
    {
      productId: '4',
      productName: 'Sensor de Minhoca',
      productPrice: '70',
      productDescription:
        'The Arduino UNO is the best board to get started with electronics and coding. If this is your first experience tinkering with the platform, the UNO is the most robust board you can start playing with. The UNO is the most used and documented board of the whole Arduino family.',
      productType: 'sensor',
      productImg: '/assets/products-images/minhoca.jpg',
    },
    {
      productId: '5',
      productName: 'Sensor DHT 11',
      productPrice: '140',
      productDescription:
        'The 8-bit board with 54 digital pins, 16 analog inputs, and 4 serial ports.',
      productType: 'sensor',
      productImg: '/assets/products-images/ultrassonico.jpg',
    },
    {
      productId: '6',
      productName: 'Sensor de Movimento',
      productPrice: '50',
      productDescription:
        "The Arduino Nano is Arduino's classic breadboard friendly designed board with the smallest dimensions. The Arduino Nano comes with pin headers that allow for an easy attachment onto a breadboard and features a Mini-B USB connector.",
      productType: 'sensor',
      productImg: '/assets/products-images/movimento.jpg',
    },
    {
      productId: '7',
      productName: 'Sensor de Temperatura',
      productPrice: '50',
      productDescription:
        "The Arduino Nano is Arduino's classic breadboard friendly designed board with the smallest dimensions. The Arduino Nano comes with pin headers that allow for an easy attachment onto a breadboard and features a Mini-B USB connector.",
      productType: 'sensor',
      productImg: '/assets/products-images/temperatura.jpg',
    },
    {
      productId: '8',
      productName: 'Sensor de Monóxido de Carbono',
      productPrice: '50',
      productDescription:
        "The Arduino Nano is Arduino's classic breadboard friendly designed board with the smallest dimensions. The Arduino Nano comes with pin headers that allow for an easy attachment onto a breadboard and features a Mini-B USB connector.",
      productType: 'sensor',
      productImg: '/assets/products-images/carbono.jpg',
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

  constructor() {
    this.boardList = this.productListTypeFilter('board');
    this.sensorList = this.productListTypeFilter('sensor');
  }

  getProductFromId(id: any) {
    let result: any;
    result = this.productList.find((element) => element.productId == id);

    return result;
  }

  //filters the productList by the type
  productListTypeFilter(type: string) {
    return this.productList.filter((p) => p.productType == type);
  }

  getProductList() {
    return this.productList;
  }

  getBoardList() {
    return this.productListTypeFilter('board');
  }
  getSensorList() {
    return this.productListTypeFilter('sensor');
  }
}
