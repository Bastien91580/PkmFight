import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pkm Fight';
  pokemonA = new Pokemon("Carapuce", 43, 44, 48, 65);
  pokemonB = new Pokemon("Salameche", 65, 39, 52, 43);

  constructor(){
    // TODO lancer le combats.
    fight(this.pokemonA, this.pokemonB, 100, 100)
  }
}


// Pkm Functions
export class Pokemon{
	name: string;
	speed: number;
	health: number;
	attack: number;
	defence: number;
	constructor(_name, _speed, _health, _attack, _defence) {
	    this.name = _name;
	    this.speed = _speed;
	    this.health = _health;
	    this.attack = _attack;
	    this.defence = _defence;
	}	

	launchAttack(pokemonExt, random){
		let damage = calculateDamages(this.attack, pokemonExt.defence, random)
		if(damage > 0){
			pokemonExt.health -= damage;
			console.log(this.name + " inflige " + damage + " pts. de dégats à " + pokemonExt.name + ".");
			return damage;
		} else {
			console.log("Ce n'est pas efficace, " + pokemonExt.name + " résiste!");
			return 0;
		}
	}
}

export function whoAttaquefirst(pokemonA, pokemonB){
	if(pokemonA.speed > pokemonB.speed){
		console.log(pokemonA.name + " attaque en premier.")
		return 1;
	} else {
		console.log(pokemonB.name + " attaque en premier.")
		return 2;
	}
}

export function calculateDamages(_attack, _defence, random){
	let powerBase = random;
	let levelAttack = 1;
	let damage = Math.floor(Math.floor(Math.floor(2 * levelAttack / 5 + 2) * _attack * powerBase / _defence) / 50) + 2;
	return damage;
}

export function fight(pokemonA, pokemonB, randomA, randomB){
	console.log("Le combat entre " + pokemonA.name + " et " + pokemonB.name + " commence !");

	let first = whoAttaquefirst(pokemonA, pokemonB);
	let A;
	let B;

	if(first === 1){
		A = pokemonA;
		B = pokemonB;
	} else {
		A = pokemonB;
		B = pokemonA;
	}

	while(A.health !== 0 && B.health !== 0){
		A.launchAttack(B, randomA);
		if(alive(B) === "ko"){
      B.health = 0;
			console.log(B.name + " est KO, " + A.name + " est le vainqueur");
			return 1;
    }
    //wait(1000);
		B.launchAttack(A, randomB);
		if(alive(A) === "ko"){
      A.health = 0;
			console.log(A.name + " est KO, " + B.name + " est le vainqueur");
			return 2;
    }
    //wait(1000);
	}
}

export function alive(pokemon){
	if (pokemon.health <= 0)
		return "ko";
	else
		return "ok";
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}