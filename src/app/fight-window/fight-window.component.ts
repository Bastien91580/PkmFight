import { Component, OnInit, Input} from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-fight-window',
  templateUrl: './fight-window.component.html',
  styleUrls: ['./fight-window.component.css']
})
export class FightWindowComponent implements OnInit {
  @Input() log: string[];
  startDate = new Date();
  constructor() { 

  }

  ngOnInit() {

  }

}