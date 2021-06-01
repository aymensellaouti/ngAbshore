import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private logger: Logger) {}
  whoIAm() {
    this.logger.logger('je suis le helper Service');
  }
}
