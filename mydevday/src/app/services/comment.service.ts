import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../Comments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/mydevdays}`;

  constructor(private http: HttpClient) { }

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.mydevday_id}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }

}
