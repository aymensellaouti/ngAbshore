import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cv: Cv = null;
  constructor() { }

  ngOnInit(): void {
  }

}
