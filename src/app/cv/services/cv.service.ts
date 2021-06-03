import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../Model/cv';
import { CONSTANTES } from '../../constantes';
import { DeleteCvDto } from '../dto/cv-delete.dto';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectItemSubject = new Subject<Cv>();
  private cvs: Cv[] = [];
  constructor(
    private http: HttpClient
  ) {
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

  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(CONSTANTES.api.CV);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(CONSTANTES.api.CV + id);
  }

  deleteCv(cv: Cv):Observable<DeleteCvDto> {
    return this.http.delete<DeleteCvDto>(CONSTANTES.api.CV + cv.id);
  }

  selectCv(cv: Cv) {
    this.selectItemSubject.next(cv);
  }
}
