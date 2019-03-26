import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../app.component';

@Component({
  selector: 'app-pkmn',
  templateUrl: './pkmn.component.html',
  styleUrls: ['./pkmn.component.css']
})
export class PkmnComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit() {
  }

}

