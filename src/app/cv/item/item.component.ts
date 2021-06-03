import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../Model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Input() heigth = 50;
  @Input() width = 50;
  /*   @Output() selectCv = new EventEmitter(); */
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}

  onSelectCv(): void {
    this.cvService.selectCv(this.cv);
    /*  this.selectCv.emit(this.cv); */
  }
}
