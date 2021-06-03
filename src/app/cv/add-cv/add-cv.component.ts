import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CONSTANTES } from '../../constantes';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addCv(cv: Cv) {
    this.cvService.addCv(cv).subscribe(
      (cv) => {
        this.toaster.success(`
          Le cv de ${cv.firstname} ${cv.name} a été ajouté avec succès
        `);
        this.router.navigate([CONSTANTES.router.CV_PREFIX]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
