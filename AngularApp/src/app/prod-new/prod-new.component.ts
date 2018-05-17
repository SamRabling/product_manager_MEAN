import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-new',
  templateUrl: './prod-new.component.html',
  styleUrls: ['./prod-new.component.css']
})
export class ProdNewComponent implements OnInit {
  newProduct: any;
  errors = null;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newProduct = { title: '', price: '', img: '' };
  }

  addProduct() {
    const observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      if (data['message'] === 'Success') {
        this.newProduct = { title: '', price: '', img: '' };
        this._router.navigate(['list']);
      } else {
        this.errors = data['error'];
      }
    });
  }

}
