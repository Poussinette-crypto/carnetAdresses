import { Component, OnInit } from '@angular/core';
import {AdresseService} from "../adresse.service";
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";
import {Adresse, Contact} from "../contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-adresse-view',
  templateUrl: './adresse-view.component.html',
  styleUrls: ['./adresse-view.component.scss']
})
export class AdresseViewComponent implements OnInit {
  adresses=[];
  formAdresse;
  busy=true;
  constructor(
    private adresseService: AdresseService,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAdresses();
    this.initForm();
  }

  getAdresses(){
    const idContact = Number(this.route.snapshot.paramMap.get('id'));
    this.adresseService.getAdresses().subscribe(adresses =>  adresses.forEach(adresse => {
      if (adresse.idContact === idContact){
        this.adresses.push(adresse);
      }}));
  }

  delete(adresse: Adresse): void{
    this.adresseService.deleteAdresse(adresse.id).subscribe();
  }

  initForm() {
    this.formAdresse = new FormGroup({
      typeAdresse: new FormControl('', [Validators.required]),
      numeroVoie: new FormControl('', [Validators.required]),
      intituleVoie: new FormControl('', [Validators.required]),
      codePostal: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      pays: new FormControl('', [Validators.required])
    });
    this.busy = false;
  }

  add(){
    const idContact = Number(this.route.snapshot.paramMap.get('id'));
    let adresse = {...{idContact : idContact}, ...this.formAdresse.value};
    this.adresseService.addAdresse(adresse as Adresse).subscribe(() => this.adresses.push(adresse));
  }

}
