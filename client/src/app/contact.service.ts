import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Contact } from './contact';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // Retrieving ContactService

  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts')
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
  deleteContact(id: string) {
    return this.http.delete('http://localhost:3000/api/contact/' + id)
      .map(res => res);
  }
}
