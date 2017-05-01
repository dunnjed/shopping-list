import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from './list-item/list-item.component';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingDataService {

  headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options = new RequestOptions({ headers: this.headers }); // Create a request option

  constructor(private http: Http) { }

  getListItems() {
    return this.http.get('http://localhost:8000/list-item/')
      .do((res: Response) => console.log(res.json()))
      .map((res: Response) => res.json());
  }

  updateItem(body: ShoppingItem) {
    const bodyString = JSON.stringify(body); // Stringify payload

    return this.http.put(`http://localhost:8000/list-item/${body._id}`, body, this.options) // ...using put request
      .do((res: Response) => { console.log(res.json()) })
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  addItem(body: ShoppingItem) {
    const bodyString = JSON.stringify(body); // Stringify payload

    return this.http.post(`http://localhost:8000/list-item/`, body, this.options) // ...using put request
      .do((res: Response) => { console.log(res.json()) })
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  deleteItem(id: string) {

    return this.http.delete(`http://localhost:8000/list-item/${id}`, this.options) // ...using put request
      .do((res: Response) => { console.log(res.json()) })
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
}


