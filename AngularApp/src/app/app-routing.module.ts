import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdNewComponent } from './prod-new/prod-new.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

const routes: Routes = [
  { path: ' ', component: IndexComponent },
  {
    path: 'products', pathMatch: 'full', component: ProdListComponent, children: [
      { path: 'new', pathMatch: 'full',  component: ProdNewComponent },
      { path: 'edit/:id', pathMatch: 'full', component: ProdEditComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
