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
  audio = new Audio();

  constructor(private apiPokemonService: ApiPokemonService) { }

  ngOnInit() {

    this.playAudioChoosePokemon(this.audio);
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

  playAudioCombat(){
    this.audio.pause();
    this.audio.src = "/assets/music/Pokemon Red & Blue - VS Wild Theme (Extended).mp3";
    this.audio.load();
    this.audio.play();
  }

  playAudioChoosePokemon(audio){
    audio.src = "/assets/music/Pokemon Red & Blue - Opening.mp3";
    audio.load();
    audio.play();
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