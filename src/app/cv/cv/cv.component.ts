import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';
import { Logger } from '../../services/logger.service';
import { HelperService } from '../../services/helper.service';
import { TodoService } from '../../todo/services/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  constructor(
    private loggerService: Logger,
    private helperService: HelperService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('cc je suis le appComponent');
    this.helperService.whoIAm();
  }
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logTodo();
  }
}
