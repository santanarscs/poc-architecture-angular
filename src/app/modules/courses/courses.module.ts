import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesIndexComponent } from './container/courses-index/courses-index.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesIndexComponent, CoursesListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoursesRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    SharedModule,
  ],
})
export class CoursesModule {}
