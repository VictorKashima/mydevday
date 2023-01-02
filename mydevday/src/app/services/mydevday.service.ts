import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mydevday } from '../Mydevday';
import { Response } from '../Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class MydevdayService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/mydevdays`;

  constructor(private http: HttpClient) {}

  getDays(): Observable<Response<Mydevday[]>> {
    return this.http.get<Response<Mydevday[]>>(this.apiUrl);
  }

  getDay(id: number): Observable<Response<Mydevday>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Mydevday>>(url);
  }

  createDay(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

}
