import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs'

interface DefaultType {
  id?: string | number
}

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: string) {}

  findAll(): Observable<T[]> {
    return this.http.get<any>(this.API_URL)
  }
  find(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1))
  }
  private create<T extends DefaultType>(record: T): Observable<T> {
    return this.http.post<T>(this.API_URL, record).pipe(take(1))
  }

  private update<T extends DefaultType>(record: T): Observable<T> {
    return this.http
      .put<T>(`${this.API_URL}/${record.id}`, record)
      .pipe(take(1))
  }

  save<T extends DefaultType>(record: T): Observable<T> {
    if (record.id) {
      return this.update(record)
    }
    return this.create(record)
  }

  remove(id: number): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${id}`).pipe(take(1))
  }
}
