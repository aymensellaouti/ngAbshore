import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, option: number): number {
    if (option) {
      return amount / 36645;
    }
    return amount * 36645;
  }
}
