import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  size = '75px';
  @Input() color = 'pink';
  @Input() bgc = 'green';
  font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
