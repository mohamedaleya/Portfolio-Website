import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'home', component: HomepageComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactsComponent, ContactComponent, HomepageComponent]
