import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '@models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = 'http://localhost:3000/students';

  constructor(private _http: HttpClient) {}

  create(data: Student): Promise<string> {
    return this._http.post<any>(this.url, data).toPromise();
  }

  update(data: Student): Promise<string> {
    return this._http.put<any>(`${this.url}/${data.id}`, data).toPromise();
  }

  save(data: Student): Promise<string> {
    if (!!data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }

  getById(id: string): Promise<Student> {
    return this._http.get<any>(`${this.url}/${id}`).toPromise();
  }

  getAll(): Promise<Student[]> {
    return this._http.get<any>(`${this.url}/`).toPromise();
  }

  search(term: string): Promise<any> {
    return this._http.get<any>(`${this.url}?name_like=${term}`).toPromise();
  }
}
