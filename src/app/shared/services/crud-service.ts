import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: string) {}

  findAll(): Observable<T[]> {
    return this.http.get<any>(this.API_URL);
  }
  find(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http
      .put(`${this.API_URL}/${record['id']}`, record)
      .pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
