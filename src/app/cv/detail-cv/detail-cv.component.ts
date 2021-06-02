import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { CONSTANTES } from '../../constantes';
import { Cv } from '../Model/cv';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(+params.id);
      if (!this.cv) {
        this.router.navigate([CONSTANTES.router.CV]);
      }
    });
  }

  deletePersonne() {
    this.cvService.deleteCv(this.cv);
    this.router.navigate([CONSTANTES.router.CV]);
  }
}
