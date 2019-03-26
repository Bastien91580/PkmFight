import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmnComponent } from './pkmn/pkmn.component';
import { FightWindowComponent } from './fight-window/fight-window.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmnComponent,
    FightWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
