import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighchartsChartModule, MatIconModule],
      declarations: [CardComponent],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
