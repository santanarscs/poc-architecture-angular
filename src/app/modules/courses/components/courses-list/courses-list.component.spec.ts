import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CdkTableModule } from '@angular/cdk/table'

import { CoursesListComponent } from './courses-list.component'

describe('CoursesListComponent', () => {
  let component: CoursesListComponent
  let fixture: ComponentFixture<CoursesListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CdkTableModule],
      declarations: [CoursesListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
