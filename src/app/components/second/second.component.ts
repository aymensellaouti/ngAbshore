import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p> cc je suis le second component </p>
  `,
  styles: [``]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
