import { Injectable } from '@angular/core';
import { Cv } from '../Model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'rotating_card_profile.png',
        'teacher',
        1234,
        38
      ),
      new Cv(2, 'test', 'test', '', 'teacher', 456, 38),
      new Cv(3, 'test', 'test', '              ', 'teacher', 456, 38),
      new Cv(
        4,
        'test',
        'test',
        'rotating_card_profile2.png',
        'teacher',
        456,
        38
      ),
    ];
  }

  getCvs(): Cv[] {
    return this.cvs;
  }
}
