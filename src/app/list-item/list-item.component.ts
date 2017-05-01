import { ShoppingDataService } from './../shopping-data.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Http, RequestOptions} from '@angular/http';

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
  subscription: Subscription;

  constructor(private shoppingData: ShoppingDataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteItem() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.shoppingData.deleteItem(this.shoppingItem._id).subscribe();
  }

  updateItem({quantity, itemName, price}: Partial<ShoppingItem>) {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.shoppingItem.quantity = quantity;
    this.shoppingItem.itemName = itemName;
    this.shoppingItem.price = price;
    this.subscription = this.shoppingData.updateItem(this.shoppingItem).subscribe();
  }
}
