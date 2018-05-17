import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  products = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.allProducts();
  }

  allProducts() {
    const observable = this._httpService.showMeProducts();
    observable.subscribe( data => {
      this.products = data ['data'];
    });
  }

  removeProd(id: string) {
    const observable = this._httpService.deleteProduct(id, this.products);
    observable.subscribe(data => {
      this.allProducts();
    });
  }
}
