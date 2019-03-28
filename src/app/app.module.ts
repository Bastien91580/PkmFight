import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmnComponent } from './pkmn/pkmn.component';
import { FightWindowComponent } from './fight-window/fight-window.component';
import { EnnemieComponent } from './ennemie/ennemie.component';
import { FightServiceService } from './fight-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PkmnComponent,
    FightWindowComponent,
    EnnemieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FightServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
