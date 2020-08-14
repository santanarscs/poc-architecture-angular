import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HighchartsChartModule } from 'highcharts-angular'
import { MatIconModule } from '@angular/material/icon'
import { AreaComponent } from './area.component'

describe('AreaComponent', () => {
  let component: AreaComponent
  let fixture: ComponentFixture<AreaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighchartsChartModule, MatIconModule],
      declarations: [AreaComponent],
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
