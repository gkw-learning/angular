import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

}
