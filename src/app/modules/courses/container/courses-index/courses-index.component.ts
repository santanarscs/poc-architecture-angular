import { Component, OnInit } from '@angular/core'
import { CoursesService } from '../../services/courses.service'
import { Observable } from 'rxjs'
import { Course } from '../../entities/Course'
import { PageEvent } from '@angular/material/paginator'
@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.scss'],
})
export class CoursesIndexComponent implements OnInit {
  courses$: Observable<Course[]>

  displayedColumns: string[] = ['id', 'name', 'description']
  limit = 5
  page = 1
  paginateOptions: number[] = [5, 10, 20, 30]

  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.service.findAll({ page: this.page, limit: this.limit })
  }
  handlePageChange({ pageSize, pageIndex }: PageEvent): void {
    this.limit = pageSize
    this.page = pageIndex
    this.handleRefresh()
  }

  private handleRefresh(): void {
    this.courses$ = this.service.findAll({ page: this.page, limit: this.limit })
  }
}
