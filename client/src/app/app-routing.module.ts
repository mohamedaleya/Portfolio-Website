import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'contact', component: ContactComponent, data: { title: 'contact' } },
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
export const routingComponents = [FeedbacksComponent, ContactComponent, HomepageComponent]
