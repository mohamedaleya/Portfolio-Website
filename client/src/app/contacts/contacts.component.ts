import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactService: ContactService) { }

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }

  ngOnInit() {
    this.getContacts();
  }
}
