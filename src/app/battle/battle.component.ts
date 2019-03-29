import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { FightServiceService } from '../fight-service.service';
import { Pokemon } from '../pokemon.model';
import { ApiPokemonService } from '../api-pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  title = 'Pkm Fight';
  fightLog: string[] = [];
  idpkmn1: number;
  idpkmn2: number;
  
  // Default Pokemon
  pokemonA = new Pokemon("Carapuce", 43, 44, 48, 65);
	pokemonB = new Pokemon("Salameche", 65, 39, 52, 43);
	@Input() isCombatStarting: boolean = true;
	
	clic: number[] = [0];
	
	launchFight(){
		if(this.clic[0] == 0){
			fight(this.pokemonA, this.pokemonB, 100, 100, this.fightLog, this.clic, this.fightService);
			this.clic[0] = 1;
		}else if(this.clic[0] == 1){
			this.clic[0] = 2;
			console.log("Pause");
		}else if(this.clic[0] == 2){
			this.clic[0] = 1;
			console.log("UnPause");
		}
	}
  
  constructor(private fightService: FightServiceService, 
    private apiPokemonService: ApiPokemonService, 
    private route: ActivatedRoute){
	}
	//_name, _speed, _health, _attack, _defence
	ngOnInit(): void{ 
		if(this.isCombatStarting){
			//playAudioCombat();
			var context = this;
			setTimeout(function(){
				context.isCombatStarting = false;
			}, 2777);
		}
    this.route.params
      .subscribe((params: Params): void => {
        this.apiPokemonService.getPkmn(params.idPokemon1).subscribe(pkmn => {
          let l = Number(pkmn['stats'][5]['base_stat']);
          let a = Number(pkmn['stats'][4]['base_stat']);
          let d = Number(pkmn['stats'][3]['base_stat']);
          let s = Number(pkmn['stats'][0]['base_stat']);
          
          this.pokemonA = new Pokemon(pkmn['name'], s, l,  a, d);
        });
    
        this.apiPokemonService.getPkmn(params.idPokemon2).subscribe(pkmn => {
          let l = Number(pkmn['stats'][5]['base_stat']);
          let a = Number(pkmn['stats'][4]['base_stat']);
          let d = Number(pkmn['stats'][3]['base_stat']);
          let s = Number(pkmn['stats'][0]['base_stat']);
    
          this.pokemonB = new Pokemon(pkmn['name'], s, l,  a, d);
        });
      });
	}

}


// Get how start to fight
export function whoAttaquefirst(pokemonA, pokemonB, log, print){
	if(pokemonA.speed > pokemonB.speed){
		if(print === 0){
			log.push(log = pokemonA.name + " attaque en premier.");
		}
		return 1;
	} else {
		if(print === 0){
			log.push(log = pokemonB.name + " attaque en premier.");
		}
		return 2;
	}
}

// Fight Function
export function fight(pokemonA, pokemonB, randomA, randomB, log, clic, fightService){
	var print = 0;

	if(pokemonA.health !== pokemonA.base_health || pokemonB.health !== pokemonB.base_health ){
		print = 1;
	} else {
		log.push("Le combat entre " + pokemonA.name + " et " + pokemonB.name + " commence !");
	}
	
	let first = whoAttaquefirst(pokemonA, pokemonB, log, print);
	var A;
	var B;

	if(first === 1){
		A = pokemonA;
		B = pokemonB;
	} else {
		A = pokemonB;
		B = pokemonA;
	}
	
	const myObservable = fightService.fight(A, B, randomA, clic, log);
	
	myObservable.subscribe(
		next => log.push(next),
		error => console.error('onError: %s', error),
		() => {playAudioVictory()}
	)
	

}

// General functions
export function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}


export function playAudioVictory(){
	let audio = new Audio();
	audio.src = "/assets/music/Pokemon Red & Blue - Victory Theme (Extended).mp3";
	audio.load();
	audio.play();
}