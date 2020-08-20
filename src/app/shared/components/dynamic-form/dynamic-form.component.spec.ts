import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DynamicFormComponent } from './dynamic-form.component'
import { Component, Input } from '@angular/core'
import { QuestionBase } from '../../models/question-base'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-question',
  template: '<p>Mock App question Card </p>',
})
class MockAppQuestionComponent {
  @Input() question: QuestionBase<string>
  @Input() form: FormGroup
}

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent
  let fixture: ComponentFixture<DynamicFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [DynamicFormComponent, MockAppQuestionComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
