import { ShoppingItem } from './list-item/list-item.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ShoppingDataService } from './shopping-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  shoppingList: Observable<ShoppingItem[]>;
  _shoppingList: ShoppingItem[];

  constructor(private shoppingData: ShoppingDataService) {

  }

  ngOnInit() {
    this.shoppingList = this.shoppingData.getListItems();
  }

  ngOnDestroy() {
  }

  addItem() {
    this.shoppingData
      .addItem({ quantity: 1, itemName: 'item', price: 0 })
      .subscribe();
  }
}


