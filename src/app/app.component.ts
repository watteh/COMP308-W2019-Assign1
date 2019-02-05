import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ngOnInit() {

  }
}

$('.nav-wrapper > a').on('click', (e) => {
  $('.nav-wrapper > a').removeClass('active');
  $(this).addClass('active');
});

$('.topPage').on('click', () => {
  document.documentElement.scrollTop = 0;
});

