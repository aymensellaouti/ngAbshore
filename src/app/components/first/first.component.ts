import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isHidden = false;
  color = 'green';
  texte = '';
  constructor() { }

  ngOnInit(): void {
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  afficher(content: string) {
    this.texte = content;
  }

}
