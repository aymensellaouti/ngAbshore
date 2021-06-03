import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../Model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isActive = 0;
  cvs: Cv[] = [];
/*   @Output() forwardSelectedCv = new EventEmitter(); */
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }

/*   handleSelectCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  } */
  changeActive(actualCv: Cv) {
    this.isActive = actualCv.id;
  }
}
