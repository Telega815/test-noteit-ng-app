import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sendFeedback(): void {
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error');
      }
    );
  }
}

export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
