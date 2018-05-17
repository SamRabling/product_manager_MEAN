import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  showMeProducts() {
    return this._http.get('/products');
  }

  addProduct(newProd) {
    return this._http.post('/products', newProd);
  }

  editProduct( id: string, updatedProd) {
    return this._http.post(`/products/${id}`, updatedProd);
  }

  oneProduct(id: string) {
    return this._http.get(`/products/${id}`);
  }

  deleteProduct(id: string, destroyedProd) {
    return this._http.post(`/products/remove/${id}`, destroyedProd);
  }
}
