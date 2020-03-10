import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // Retrieving ContactService

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/api/contacts')
      .map(res => res);
  }

  // Add contact method
  addContact(newContact) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, { headers })
    .map(res => res);

  }

  // Delete contact method
  deleteContact(id: string): Observable<any>  {
    return this.http.delete('http://localhost:3000/api/contact/' + id)
      .map(res => res);
  }
}
