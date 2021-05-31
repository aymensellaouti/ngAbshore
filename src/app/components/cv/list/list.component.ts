import { Component, OnInit } from '@angular/core';
import { Cv } from '../Model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(1,'sellaouti', 'aymen', 'rotating_card_profile.png', 'teacher', 1234,38),
    new Cv(2,'test', 'test', 'rotating_card_profile2.png', 'teacher', 456,38),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
