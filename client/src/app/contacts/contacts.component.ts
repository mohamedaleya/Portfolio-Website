import { Component, OnInit, HostListener } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Routes, NavigationEnd, Router } from '@angular/router';

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
  router: any;
  data: any=[];

  constructor(private contactService: ContactService, router: Router) {  }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(newContact);
    });
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }

  deleteContact(id) {
    console.log('deleting ' + id);
    this.contactService.deleteContact(id).subscribe(
      msg => console.log(msg),
      error => console.log(error)

    );
  }



  ngOnInit() {
    this.getContacts();

  }
}
