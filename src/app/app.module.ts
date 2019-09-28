import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructifyModule } from './modules/constructify/constructify.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConstructifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
