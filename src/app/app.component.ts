import { ShoppingDataLocalStoreService } from './services/shopping-data-local-store.service';
import { environment } from './../environments/environment.prod';
import { ShoppingItem } from './list-item/list-item.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingDataService } from './shopping-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  shoppingList: BehaviorSubject<ShoppingItem[]>;
  totalPrice: number;

  constructor(private shoppingData: ShoppingDataService,
    private localStore: ShoppingDataLocalStoreService) {

    this.shoppingList = localStore.initData();

  }

  ngOnInit() {
    this.shoppingList.subscribe(data => {
      if (data) {
        this.totalPrice = this.calculateTotalPrice(data);
      }
    });
  }

  ngOnDestroy() {
  }

  calculateTotalPrice(data: ShoppingItem[]) {
    let _total = 0;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].price);
      _total += data[i].price * data[i].quantity;
    }
    return _total;
  }

  addItem() {
    this.localStore.addItem({
      quantity: 1, itemName: 'item', price: 0
    });
  }
}


