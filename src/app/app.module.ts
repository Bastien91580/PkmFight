import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmnComponent } from './pkmn/pkmn.component';
import { FightWindowComponent } from './fight-window/fight-window.component';
import { FightServiceService } from './fight-service.service';
import { ApiPokemonService } from './api-pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { ChoiceComponent } from './choice/choice.component';

const routes: Routes = [
  { path: '',  component: ChoiceComponent },
  { path: 'battle',  component: BattleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PkmnComponent,
    FightWindowComponent,
    BattleComponent,
    ChoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [FightServiceService, ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
