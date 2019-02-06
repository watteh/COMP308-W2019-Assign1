// contact.component.ts -- Ryan Watson -- 300920674 -- 02/06/19

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // setting title variable; creating string variables for form submission
  title = `Contact Watson Innovation`;
  fName: string;
  lName: string;
  number: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  // method to process form data and create an alert on the page; once okay is clicked, redirects to home page
  processForm() {
    const allInfo = `${this.fName} ${this.lName} at email ${this.email} and #${this.number} says "${this.message}"`;
    alert(allInfo);
    window.location.href = '/';
  }

}
