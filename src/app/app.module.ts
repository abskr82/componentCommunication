import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
