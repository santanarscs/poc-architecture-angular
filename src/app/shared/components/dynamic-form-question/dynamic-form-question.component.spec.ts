import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DynamicFormQuestionComponent } from './dynamic-form-question.component'

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent
  let fixture: ComponentFixture<DynamicFormQuestionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
