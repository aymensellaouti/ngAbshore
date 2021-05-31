import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div> cc je suis le second component </div>
  `,
  styles: [`
      <div> cc je suis le second component </div>
  `]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
