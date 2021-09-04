import { Component, OnInit } from '@angular/core';
import {AdresseService} from "../adresse.service";
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";
import {Adresse, Contact} from "../contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UpdateAdresseComponent} from "../dialog/update-adresse/update-adresse.component";

@Component({
  selector: 'app-adresse-view',
  templateUrl: './adresse-view.component.html',
  styleUrls: ['./adresse-view.component.scss']
})
export class AdresseViewComponent implements OnInit {
  adresses=[];
  formAdresse;
  busy=true;
  idContact;
  constructor(
    private adresseService: AdresseService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAdresses();
    this.initForm();
  }

  getAdresses(){
    this.idContact = Number(this.route.snapshot.paramMap.get('id'));
    this.adresseService.getAdresses().subscribe(adresses => {
      this.adresses = [];
      adresses.forEach(adresse => {
        if (adresse.idContact === this.idContact){
          this.adresses.push(adresse);
        }})
    });
  }

  delete(adresse: Adresse): void{
    this.adresseService.deleteAdresse(adresse).subscribe(() => {
      this.adresses = this.adresses.filter(selAdresse => selAdresse.id !== adresse.id )
    });
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

  updateAdresse(identification: number){
    const dialogRef = this.dialog.open(UpdateAdresseComponent, {
      data: {id: identification,
            idContact: this.idContact}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAdresses();
    });
  }

  ajouterAdresse(){
    const idContact = Number(this.route.snapshot.paramMap.get('id'));
    const dialogRef = this.dialog.open(UpdateAdresseComponent, {
      data: {id: undefined,
            idContact: idContact}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAdresses();
    });
}

}
