import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CdkTableModule } from '@angular/cdk/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSortModule } from '@angular/material/sort'
import { MatIconModule } from '@angular/material/icon'
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator'

import { CoursesRoutingModule } from './courses-routing.module'
import { CoursesIndexComponent } from './container/courses-index/courses-index.component'
import { CoursesListComponent } from './components/courses-list/courses-list.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { getTranslatePaginatorIntl } from 'src/app/shared/intl/mat-paginator'

// export function getTranslatePaginatorIntl() {
//   const paginator = new MatPaginatorIntl()

//   paginator.itemsPerPageLabel = 'Itens por página'
//   return paginator
// }

@NgModule({
  declarations: [CoursesIndexComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CdkTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    SharedModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getTranslatePaginatorIntl() },
  ],
})
export class CoursesModule {}
