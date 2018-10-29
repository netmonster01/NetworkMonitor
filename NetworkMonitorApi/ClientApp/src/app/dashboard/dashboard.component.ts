import { Component, OnInit } from '@angular/core';
//import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  post: string;

  constructor() { }

  ngOnInit() {
    this.post = "<b>hello world</b><br><pre data-lang='HTML'><code>function cool(x) {return x + 1;}</code></pre>";
  }

}
