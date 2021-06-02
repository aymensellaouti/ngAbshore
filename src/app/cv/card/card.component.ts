import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../Model/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
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
