import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../app.component';

@Component({
  selector: 'app-ennemie',
  templateUrl: './ennemie.component.html',
  styleUrls: ['./ennemie.component.css']
})
export class EnnemieComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
