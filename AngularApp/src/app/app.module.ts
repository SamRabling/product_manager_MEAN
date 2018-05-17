import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdNewComponent } from './prod-new/prod-new.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProdListComponent,
    ProdNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
