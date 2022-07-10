import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberValueAccessor } from '@angular/forms';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  url = 'http://jsonplaceholder.typicide.com/posts';

  constructor(private http: HttpClient) {}

  post() {
    this.http
      .post(this.url, {
        userId: 2,
        title: 'hello',
        body: 'bye',
      })
      .subscribe(console.log);
  }

  ngOnInit(): void {}
}
