import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-simulator',
  templateUrl: './routing-simulator.component.html',
  styleUrls: ['./routing-simulator.component.css'],
})
export class RoutingSimulatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  naviguer(myRoute: string) {
    this.router.navigate([myRoute]);
  }
}
