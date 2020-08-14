import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { CoursesIndexComponent } from './courses-index.component'
import { Component, Input } from '@angular/core'
import { Course } from '../../entities/Course'

@Component({
  selector: 'app-action',
  template: '<p>Mock App Action </p>',
})
class MockAppActionComponent {}

@Component({
  selector: 'app-courses-list',
  template: '<p>Mock App Widget Pie </p>',
})
class MockAppCoursesListComponent {
  @Input() courses: Course[]
  @Input() displayedColumns: string[]
}

describe('CoursesIndexComponent', () => {
  let component: CoursesIndexComponent
  let fixture: ComponentFixture<CoursesIndexComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatCardModule, MatIconModule],
      declarations: [
        CoursesIndexComponent,
        MockAppActionComponent,
        MockAppCoursesListComponent,
      ],
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
