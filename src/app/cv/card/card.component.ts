import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../Model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((newCv) => (this.cv = newCv));
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success('Bienvenu cher candidat :)');
    } else {
      this.toaster.warning(
        `Le candidat ${this.cv.firstname} ${this.cv.name} est déjà préselectionné`
      );
    }
  }
}
