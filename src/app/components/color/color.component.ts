import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'green';
  color = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParams) => {
      this.color = mesParams['myColor'];
    });
    this.activatedRoute.queryParams.subscribe((mesParams) => {
      console.log(mesParams);
    });
  }
  changeColor(newColor: string): void {
    this.color = newColor;
  }
}
