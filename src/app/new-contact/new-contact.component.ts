import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {Contact} from "../contact";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  formContact;
  busy = true;
  constructor(private contactService: ContactService,
  private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formContact = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required])
    });
    this.busy = false;
  }

  add(): void {
    this.contactService.addContact(this.formContact.value as Contact).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
