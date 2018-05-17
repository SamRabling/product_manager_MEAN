import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {
  edit_prod = {title: '', price: '', img: ''};
  id: string;
  prod_params: any;
  errors = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.edit_prod = { title: '', price: '', img: '' };
    this.prod_params = this._route.params.subscribe(params => this.id = params['id']);
  }

  oneProduct(id: string) {
    const obsevable = this._httpService.oneProduct(id);
    obsevable.subscribe(data => this.edit_prod = data['data']);
  }

  editProduct() {
    const obsevable = this._httpService.editProduct(this.id, this.edit_prod);
    obsevable.subscribe(data => {
      if (data['message'] === 'Success') {
      this.edit_prod = { title: '', price: '', img: '' };
      this._router.navigate(['list']);
      } else {
        this.errors = data['error'];
      }
    });
  }

}
