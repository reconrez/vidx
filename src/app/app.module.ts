import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideoplayerModule } from './core/modules/videoplayer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoplayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
