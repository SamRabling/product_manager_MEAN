import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdNewComponent } from './prod-new/prod-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'products/list', component: ProdListComponent },
  { path: 'products/new', component: ProdNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
