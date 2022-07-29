import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '@models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  url: string = 'http://localhost:3000/classes';

  constructor(private _http: HttpClient) {}

  create(data: Classes): Promise<string> {
    return this._http.post<any>(this.url, data).toPromise();
  }

  update(data: Classes): Promise<string> {
    return this._http.put<any>(`${this.url}/${data.id}`, data).toPromise();
  }

  save(data: Classes): Promise<string> {
    if (!!data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }

  getById(id: string): Promise<Classes> {
    return this._http.get<any>(`${this.url}/${id}`).toPromise();
  }

  getAll(): Promise<Classes[]> {
    return this._http.get<any>(`${this.url}/`).toPromise();
  }

  search(term: string): Promise<any> {
    return this._http.get<any>(`${this.url}?name_like=${term}`).toPromise();
  }
}
