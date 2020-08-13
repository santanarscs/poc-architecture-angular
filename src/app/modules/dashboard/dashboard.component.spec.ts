import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from './dashboard.component';
import { Component, Input } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-widget-pie',
  template: '<p>Mock App Widget Pie </p>',
})
class MockWidgetPie {
  @Input() data: any[];
}

@Component({
  selector: 'app-widget-area',
  template: '<p>Mock App Widget area </p>',
})
class MockWidgetArea {
  @Input() data: any[];
}

@Component({
  selector: 'app-widget-card',
  template: '<p>Mock App Widget Card </p>',
})
class MockWidgetCard {
  @Input() data: any[];
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatCardModule, MatDividerModule],
      declarations: [
        DashboardComponent,
        MockWidgetArea,
        MockWidgetCard,
        MockWidgetPie,
      ],
      providers: [DashboardService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
