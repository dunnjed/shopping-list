import { ShoppingDataLocalStoreService } from './../services/shopping-data-local-store.service';
import { ShoppingDataService } from './../shopping-data.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http, RequestOptions } from '@angular/http';

export interface ShoppingItem {
  itemName: string;
  quantity: number;
  price: number;
  _id?: string;
  createdAt?: string;
};

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {

  @Input() shoppingItem: ShoppingItem;
  @Input() index: number;

  constructor(private shoppingData: ShoppingDataService,
    private localStore: ShoppingDataLocalStoreService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  deleteItem() {
    this.localStore.deleteItem(this.shoppingItem._id, this.index);
  }

  updateItem({ quantity, itemName, price }: Partial<ShoppingItem>) {

    this.shoppingItem.quantity = quantity;
    this.shoppingItem.itemName = itemName;
    this.shoppingItem.price = price;
    this.shoppingData.updateItem(this.shoppingItem).subscribe();
  }
}
