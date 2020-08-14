import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'

import { DashboardComponent } from './dashboard.component'
import { Component, Input } from '@angular/core'
import { DashboardService } from './services/dashboard.service'

@Component({
  selector: 'app-widget-pie',
  template: '<p>Mock App Widget Pie </p>',
})
class MockWidgetPieComponent {
  @Input() data: any[]
}

@Component({
  selector: 'app-widget-area',
  template: '<p>Mock App Widget area </p>',
})
class MockWidgetAreaComponent {
  @Input() data: any[]
}

@Component({
  selector: 'app-widget-card',
  template: '<p>Mock App Widget Card </p>',
})
class MockWidgetCardComponent {
  @Input() data: any[]
}

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatCardModule, MatDividerModule],
      declarations: [
        DashboardComponent,
        MockWidgetAreaComponent,
        MockWidgetCardComponent,
        MockWidgetPieComponent,
      ],
      providers: [DashboardService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
