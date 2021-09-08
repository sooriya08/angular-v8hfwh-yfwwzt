import { Component } from '@angular/core';
import { ConfigService } from './config.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const jsonData = {
  products: {
    items: [
      {
        productId: '1',
        dept: 'home',
        itemtype: 'small'
      },
      {
        productId: '2',
        dept: 'kitchen',
        itemtype: 'medium'
      },
      {
        productId: '3',
        dept: 'sooriya',
        itemtype: 'small'
      }
    ]
  }
};

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample {
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.config.getData().subscribe(data => {
      console.log('data ', data);
    });
  }

  displayedColumns = ['productId', 'dept', 'itemtype'];
  dataSource = jsonData.products.items;
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
