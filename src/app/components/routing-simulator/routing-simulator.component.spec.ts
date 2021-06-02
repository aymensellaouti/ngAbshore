import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSimulatorComponent } from './routing-simulator.component';

describe('RoutingSimulatorComponent', () => {
  let component: RoutingSimulatorComponent;
  let fixture: ComponentFixture<RoutingSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSimulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
