import { Injectable } from '@angular/core'
import { CrudService } from '../../../shared/services/crud-service'
import { Course } from '../entities/Course'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root',
})
export class CoursesService extends CrudService<Course> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.API_URL}/courses`)
  }
}
