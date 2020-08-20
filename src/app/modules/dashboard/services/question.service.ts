import { Injectable } from '@angular/core'

import { of, Observable } from 'rxjs'
import { QuestionBase } from 'src/app/shared/models/question-base'
import { DropdownQuestion } from 'src/app/shared/models/question-dropdown'
import { TextboxQuestion } from 'src/app/shared/models/question-textobox'

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions(): Observable<QuestionBase<string>[]> {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ]

    return of(questions.sort((a, b) => a.order - b.order))
  }
}
