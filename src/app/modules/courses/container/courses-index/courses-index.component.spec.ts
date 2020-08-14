import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { CoursesIndexComponent } from './courses-index.component'
import { Component } from '@angular/core'

@Component({
  selector: 'app-action',
  template: '<p>Mock App Widget Pie </p>',
})
class MockAppActionComponent {}

describe('CoursesIndexComponent', () => {
  let component: CoursesIndexComponent
  let fixture: ComponentFixture<CoursesIndexComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoursesIndexComponent, MockAppActionComponent],
      providers: [],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
