import { Component, OnInit, Input } from '@angular/core'
import { Course } from '../../entities/Course'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[]
  @Input() displayedColumns: string[]

  constructor() {}

  ngOnInit(): void {}
}
