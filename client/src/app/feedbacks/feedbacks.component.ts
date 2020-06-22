import { Component, OnInit, HostListener } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { Routes, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css'],
  providers: [FeedbackService]
})
export class FeedbacksComponent implements OnInit {
  feedbacks: Feedback[];
  feedback: Feedback;
  name: string;
  email: string;
  input: string;
  router: any;
  data: any=[];

  constructor(private feedbackService: FeedbackService, router: Router) {  }

  addFeedback() {
    const newFeedback = {
      name: this.name,
      email: this.email,
      input: this.input
    };
    this.feedbackService.addFeedback(newFeedback).subscribe(feedback => {
      this.feedbacks.push(newFeedback);
    });
  }

  getFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
      console.log(this.feedbacks);
    });
  }

  deleteFeedback(id) {
    console.log('deleting ' + id);
    this.feedbackService.deleteFeedback(id).subscribe(
      msg => console.log(msg),
      error => console.log(error)

    );
  }



  ngOnInit() {
    this.getFeedbacks();

  }
}
