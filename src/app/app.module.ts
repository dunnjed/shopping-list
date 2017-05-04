import { ShoppingDataLocalStoreService } from './services/shopping-data-local-store.service';
import { ShoppingDataService } from './shopping-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RawListComponent } from './raw-list/raw-list.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    RawListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [
    ShoppingDataService,
    ShoppingDataLocalStoreService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
