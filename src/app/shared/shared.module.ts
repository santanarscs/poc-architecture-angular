import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AreaComponent } from './widgets/area/area.component'
import { CardComponent } from './widgets/card/card.component'
import { PieComponent } from './widgets/pie/pie.component'
import { ActionComponent } from './components/action/action.component'

import { HighchartsChartModule } from 'highcharts-angular'
import { MatIconModule } from '@angular/material/icon'
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component'
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component'
@NgModule({
  declarations: [
    AreaComponent,
    CardComponent,
    PieComponent,
    ActionComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    HighchartsChartModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    AreaComponent,
    CardComponent,
    PieComponent,
    ActionComponent,
    DynamicFormComponent,
  ],
})
export class SharedModule {}
