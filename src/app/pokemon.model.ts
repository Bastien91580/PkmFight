// Pkm Functions
export class Pokemon{
	name: string;
	speed: number;
    health: number;
    base_health: number;
	attack: number;
	defence: number;
	healht_por: string;
	healht_por_num: number;
	attacked: boolean;
	constructor(_name: string, _speed: number, _health: number, _attack: number, _defence: number) {
	    this.name = _name;
        this.speed = _speed;
        this.base_health = _health
	    this.health = _health;
        this.attack = _attack;
        this.defence = _defence;
		this.healht_por = '100%';
		this.healht_por_num = 100;
		this.attacked = false;
	}	

	launchAttack(pokemonExt, random, log:string[]){
		let damage = calculateDamages(this.attack, pokemonExt.defence, random)
		if(damage > 0){
			pokemonExt.health -= damage;
			pokemonExt.attacked = true;
			pokemonExt.healht_por_num = Math.floor((pokemonExt.health * 100) / pokemonExt.base_health) 
			pokemonExt.healht_por = pokemonExt.healht_por_num + "%";

			log.push(this.name + " inflige " + damage + " pts. de dégats à " + pokemonExt.name + ".");
			return damage;
		} else {
			log.push("Ce n'est pas efficace, " + pokemonExt.name + " résiste!");
			return 0;
		}
	}
}


// Damages calcul function
export function calculateDamages(_attack, _defence, random){
	let powerBase = random;
	let levelAttack = 1;
	let damage = Math.floor(Math.floor(Math.floor(2 * levelAttack / 5 + 2) * _attack * powerBase / _defence) / 50) + 2;
	return damage;
}