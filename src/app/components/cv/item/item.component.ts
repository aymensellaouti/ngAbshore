import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor() { }

  ngOnInit(): void {
  }

}
