import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() message = 'mon message a moi en tant que fils';
  color = 'green';
  @Output() sendDataToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitMyEvent() {
    this.sendDataToData.emit({
      'message': 'cc papa'
    });
  }

}
