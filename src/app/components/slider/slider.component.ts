import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  path = 'rotating_card_profile3.png';
  sliderObservable: Observable<string> = null;
  sliderSubscription: Subscription = null;
  @Input() timer = 1000;
  @Input() width = 100;
  @Input() heigth = 100;
  @Input() isRounded = true;
  @Input() paths: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  constructor() {}
  ngOnDestroy(): void {
   this.sliderSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.sliderObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i == this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
    this.sliderSubscription = this.sliderObservable.subscribe((newPath) => (this.path = newPath));
  }
}
