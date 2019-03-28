import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightServiceService {
  constructor() { }

    fight(A: Pokemon,  B: Pokemon, randomA: number, clic: number[], log: string[]){
      return new Observable(subscriber => {
				setInterval(function(){
					if(A.health !== 0 && B.health !== 0 && clic[0] == 1){
						A.launchAttack(B, randomA, log);
						if(B.health <= 0){
							B.health = 0;
							B.healht_por = "0%";
							B.healht_por_num = 0;
							subscriber.next(B.name + " est KO, " + A.name + " est le vainqueur");
							return 1;
						}
						A.attacked = false;
						var tmp = A;
						A = B;
						B = tmp;
					}
				}, 2000);
			});
		}
}
