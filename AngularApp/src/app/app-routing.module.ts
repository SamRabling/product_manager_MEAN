import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdNewComponent } from './prod-new/prod-new.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'products/list', component: ProdListComponent },
  { path: 'products/new', component: ProdNewComponent },
  { path: 'products/edit/:id', component: ProdEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
