import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { Course } from '../../entities/Course';
@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.scss'],
})
export class CoursesIndexComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['seqNo', 'name', 'description'];

  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.service.findAll();
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
