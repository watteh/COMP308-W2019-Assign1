import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = `Contact Watson Innovation`;
  fName: string;
  lName: string;
  number: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `${this.fName} ${this.lName} at email ${this.email} and #${this.number} says "${this.message}"`;
    alert(allInfo);
    window.location.href = '/';
  }

}
