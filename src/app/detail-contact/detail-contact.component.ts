import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../contact.service";
import {Location} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent implements OnInit {
  @Input() contact? :Contact;
  update = false;
  formContact;
  formAdresse;
  busy = true;

  initForm(){
    this.formContact = new FormGroup({
      firstName : new FormControl(this.contact.firstName,[Validators.required]),
      lastName : new FormControl(this.contact.lastName,[Validators.required]),
      dateOfBirth: new FormControl(this.contact.dateOfBirth,[Validators.required]),
      telephone: new FormControl(this.contact.telephone,[Validators.required])
    });
    /*
    this.formAdresse = new FormGroup({
      id: new FormControl(this.contact.adresse[0].id,[Validators.required]),
      typeAdresse: new FormControl(this.contact.adresse[0].typeAdresse,[Validators.required]),
      typeVoie: new FormControl(this.contact.adresse[0].typeVoie,[Validators.required])
    })

     */
  }


  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContact(id).subscribe(contact => {
      this.contact = contact;
      this.initForm();
      this.busy = false;
    })
  }

  goBack(): void {
    this.location.back();
  }

  save(identification): void {
    this.contact = {...{id : identification}, ...this.formContact.value};
    if (this.contact){
      this.contactService.updateContact(this.contact).subscribe(() => this.goBack())
    }
  }

  delete(contact: Contact): void{
    this.contactService.deleteContact(contact.id).subscribe(() => this.goBack());
  }

}
