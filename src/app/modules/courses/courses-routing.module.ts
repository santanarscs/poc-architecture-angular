import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesIndexComponent } from './container/courses-index/courses-index.component';

const routes: Routes = [{ path: '', component: CoursesIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
