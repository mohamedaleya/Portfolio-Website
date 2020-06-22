import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from './feedback';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  // Retrieving FeedbackService

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>('http://localhost:3000/api/feedbacks')
      .map(res => res);
  }

  // Add feedback method
  addFeedback(newFeedback) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/feedback', newFeedback, { headers })
    .map(res => res);

  }

  // Delete feedback method
  deleteFeedback(id: string)  {
    return this.http.delete('http://localhost:3000/api/feedback/' + id)
      .map(res => res);
  }
}
