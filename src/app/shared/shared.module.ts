import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AreaComponent } from './widgets/area/area.component'
import { CardComponent } from './widgets/card/card.component'
import { PieComponent } from './widgets/pie/pie.component'
import { HighchartsChartModule } from 'highcharts-angular'
import { MatIconModule } from '@angular/material/icon'
import { ActionComponent } from './containers/action/action.component'
@NgModule({
  declarations: [AreaComponent, CardComponent, PieComponent, ActionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    HighchartsChartModule,
    MatIconModule,
    HttpClientModule,
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
  ],
})
export class SharedModule {}
