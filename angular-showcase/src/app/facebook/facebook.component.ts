import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facebook } from './facebook';
import { FacebookService } from './facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})

export class FacebookComponent implements OnInit {
  title = 'facebook component';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
