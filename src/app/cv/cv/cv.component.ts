import { Component, OnInit } from '@angular/core';
import { Logger } from '../../services/logger.service';
import { HelperService } from '../../services/helper.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /* selectedCv: Cv = null; */
  nbre = 0;
  constructor(
    private loggerService: Logger,
    private helperService: HelperService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('cc je suis le appComponent');
    this.helperService.whoIAm();
    this.cvService.selectItemSubject
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(
      () => this.nbre++
    )
  }
  /*   getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logTodo();
  } */
}
