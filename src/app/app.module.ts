import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SebButtonModule, SebDropdownModule} from '@sebgroup/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SebButtonModule,
    SebDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
