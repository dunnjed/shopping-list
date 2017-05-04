import { ShoppingDataService } from './../shopping-data.service';
import { ShoppingItem } from './../list-item/list-item.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingDataLocalStoreService {

  private _shoppingList: ShoppingItem[];
  shoppingList: BehaviorSubject<ShoppingItem[]> = new BehaviorSubject<ShoppingItem[]>(this._shoppingList);

  constructor(private shoppingData: ShoppingDataService) {
  }

  initData() {
    if (this._shoppingList) {
      throw new Error('shoppingList already initialized');
    }
    this.shoppingData.getListItems().subscribe(data => {
      this._shoppingList = data;
      this.shoppingList.next(this._shoppingList);
    });
    return this.shoppingList;
  }

  addItem(shoppingItem: ShoppingItem) {
    this.shoppingData.addItem(shoppingItem).subscribe(data => {
      this._shoppingList.push(data.listItem);
      this.shoppingList.next(this._shoppingList);
    });
  }

  deleteItem(itemId: string, shoppingListIndex: number) {
    this.shoppingData.deleteItem(itemId).subscribe(data => {
      this._shoppingList = [
        ...this._shoppingList.slice(0, shoppingListIndex),
        ...this._shoppingList.slice(shoppingListIndex + 1)
      ];
      this.shoppingList.next(this._shoppingList);
    });
  }
}
