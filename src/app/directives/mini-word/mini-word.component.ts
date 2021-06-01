import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent implements OnInit {
  color = 'red';
  font = 'garamond';
  size = 50;
  isBorderDashed = false;
  constructor() {}

  ngOnInit(): void {}

  changeFont(newFont: string): void {
    this.font = newFont;
  }
}
