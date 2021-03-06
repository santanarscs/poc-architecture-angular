import { HttpClient, HttpParams } from '@angular/common/http'
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs'

interface DefaultType {
  id?: string | number
}
interface SearchData {
  page: number
  limit: number
}

export class CrudService<T> {
  constructor(protected http: HttpClient, private API_URL: string) {}

  findAll({ page, limit }: SearchData): Observable<T[]> {
    const params = new HttpParams({
      fromObject: { _page: String(page), _limit: String(limit) },
    })
    return this.http.get<T[]>(this.API_URL, { params })
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
