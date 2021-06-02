import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../Model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Input() heigth = 50;
  @Input() width = 50;
  @Output() selectCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelectCv(): void {
    this.selectCv.emit(this.cv);
  }
}
