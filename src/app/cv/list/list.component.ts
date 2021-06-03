import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../Model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isActive = 0;
  cvs: Cv[] = [];
  /*   @Output() forwardSelectedCv = new EventEmitter(); */
  constructor(private cvService: CvService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs) => (this.cvs = cvs),
      (erreur) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.warning(
          `Problème de connexion avec le serveur. Les data sont fake. Prière de contacter l'admin`
        );
      }
    );
  }

  /*   handleSelectCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  } */
  changeActive(actualCv: Cv) {
    this.isActive = actualCv.id;
  }
}
