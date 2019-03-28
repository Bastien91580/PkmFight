import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pkm Fight';
  fightLog: string[] = [];
  pokemonA = new Pokemon("Carapuce", 43, 44, 48, 65);
	pokemonB = new Pokemon("Salameche", 65, 39, 52, 43);
	clic: number[] = [0];
	
	launchFight(){
		if(this.clic[0] == 0){
			fight(this.pokemonA, this.pokemonB, 100, 100, this.fightLog, this.clic);
			this.clic[0] = 1;
		}else if(this.clic[0] == 1){
			this.clic[0] = 2;
			console.log("Pause");
		}else if(this.clic[0] == 2){
			this.clic[0] = 1;
			console.log("UnPause");
		}
	}
  
  constructor(){
	}
	
	ngOnInit(): void{
    
	}
}


// Pkm Functions
export class Pokemon{
	name: string;
	speed: number;
  health: number;
  base_health: number;
	attack: number;
	defence: number;
	healht_por: string;
	constructor(_name, _speed, _health, _attack, _defence) {
	    this.name = _name;
      this.speed = _speed;
      this.base_health = _health
	    this.health = _health;
	    this.attack = _attack;
			this.defence = _defence;
			this.healht_por = '100%';
	}	

	launchAttack(pokemonExt, random, log:string[]){
		let damage = calculateDamages(this.attack, pokemonExt.defence, random)
		if(damage > 0){
			pokemonExt.health -= damage;
			pokemonExt.healht_por = Math.floor((pokemonExt.health * 100) / pokemonExt.base_health) + "%";
			log.push(this.name + " inflige " + damage + " pts. de dégats à " + pokemonExt.name + ".");
			return damage;
		} else {
			log.push("Ce n'est pas efficace, " + pokemonExt.name + " résiste!");
			return 0;
		}
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

// Damages calcul function
export function calculateDamages(_attack, _defence, random){
	let powerBase = random;
	let levelAttack = 1;
	let damage = Math.floor(Math.floor(Math.floor(2 * levelAttack / 5 + 2) * _attack * powerBase / _defence) / 50) + 2;
	return damage;
}

// Fight Function
export function fight(pokemonA, pokemonB, randomA, randomB, log, clic){
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

	setInterval(function(){
		if(A.health !== 0 && B.health !== 0 && clic[0] == 1){
			A.launchAttack(B, randomA, log);
			if(B.health <= 0){
				B.health = 0;
				B.healht_por = "0%";
				log.push(B.name + " est KO, " + A.name + " est le vainqueur");
				console.log(B.name + " est KO, " + A.name + " est le vainqueur")
				return 1;
			}

			var tmp = A;
			A = B;
			B = tmp;
		}

	}, 2000);

}

// General functions
export function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
