import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HerosDetailComponent } from './heros-detail/heros-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { InlinedataService } from './service/inlinedata.service';
import { LocaldataService } from './service/localdata.service';
import { LivedataService } from './service/livedata.service';
import { HerosLiveComponent } from './heros-live/heros-live.component';
import { HerosInlineComponent } from './heros-inline/heros-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosDetailComponent,
    HerosLiveComponent,
    HerosInlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InlinedataService, LocaldataService, LivedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
