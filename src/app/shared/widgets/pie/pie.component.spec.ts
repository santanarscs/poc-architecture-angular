import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule } from '@angular/material/icon';
import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighchartsChartModule, MatIconModule],
      declarations: [PieComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
