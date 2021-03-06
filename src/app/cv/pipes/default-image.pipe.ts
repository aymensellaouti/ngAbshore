import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from '../../constantes';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (path && path.trim()) {
      return path;
    }
    return CONSTANTES.defaultImage;
  }
}
