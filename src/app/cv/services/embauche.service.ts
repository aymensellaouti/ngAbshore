import { Injectable } from '@angular/core';
import { Cv } from '../Model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() {}

  getEmbauchees(): Cv[] {
    return this.embauchees;
  }

  embaucher(cv: Cv): boolean {
    console.log(cv);
    

    const index = this.embauchees.indexOf(cv);

    if (index == -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
