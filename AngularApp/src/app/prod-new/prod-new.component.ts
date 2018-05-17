import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-new',
  templateUrl: './prod-new.component.html',
  styleUrls: ['./prod-new.component.css']
})
export class ProdNewComponent implements OnInit {
  newProduct: any;
  errors = null;
  prod_params: any;
  id: string;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newProduct = { title: '', price: null , img: '' };
    this.prod_params = this._route.params.subscribe(params => this.id = params['id']);

  }

  submitProduct() {
    console.log('got data');
    const observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      if (data['status'] === 'True') {
        this.newProduct = { title: '', price: null, img: '' };
        this._router.navigate(['']);
      } else {
        this.errors = data['error'];
      }
    });
  }

}
