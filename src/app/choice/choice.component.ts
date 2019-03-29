import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { ApiPokemonService } from '../api-pokemon.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  clicked = 0
  pokemon1: number
  pokemon2: number
  isButtonVisible = false;
  selected: boolean[] = [false,false,false,false];

  constructor(private apiPokemonService: ApiPokemonService) { }

  ngOnInit() {
  }

  selectPkmn(id){
    if(this.clicked === 0){
      select(this.selected, id);
      this.pokemon1 = id;
      this.clicked++;
    } else if(this.clicked === 1){
      select(this.selected, id);
      this.pokemon2 = id;
      this.clicked++;
      this.isButtonVisible = true;
    }

  }


}

export function select(selected, id){
  if(id === 1){
    selected[2] = true;
  } else if(id === 4){
    selected[0] = true;
  } else if(id === 7){
    selected[1] = true;
  } else if(id === 25){
    selected[3] = true;
  }

}