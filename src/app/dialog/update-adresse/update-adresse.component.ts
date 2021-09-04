import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Adresse, updateAdresse} from "../../contact";
import {AdresseService} from "../../adresse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-adresse',
  templateUrl: './update-adresse.component.html',
  styleUrls: ['./update-adresse.component.scss']
})
export class UpdateAdresseComponent implements OnInit {

  formAdresse;
  busy = true;
  adresse;

  constructor(
    public dialogRef: MatDialogRef<UpdateAdresseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: updateAdresse,
    private adresseService: AdresseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.data.id){
      this.getAdresse();
    }else {
      this.initForm();
    }

  }

  initForm() {
    if(this.data.id){
      this.formAdresse = new FormGroup({
        typeAdresse: new FormControl(this.adresse.typeAdresse, [Validators.required]),
        numeroVoie: new FormControl(this.adresse.numeroVoie, [Validators.required]),
        intituleVoie: new FormControl(this.adresse.intituleVoie, [Validators.required]),
        codePostal: new FormControl(this.adresse.codePostal, [Validators.required]),
        ville: new FormControl(this.adresse.ville, [Validators.required]),
        pays: new FormControl(this.adresse.pays, [Validators.required])
      });
      this.busy = false;
    }else {
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

  }

  getAdresse(): void {
    this.adresseService.getAdresse(this.data.id).subscribe(adresse => {
      this.adresse = adresse;
      this.initForm();
      this.busy = false;
    })
  }

  save(identification, contactId): void {
    this.adresse = {...{id : identification, idContact: contactId}, ...this.formAdresse.value};
    if (this.adresse){
      this.adresseService.updateAdresse(this.adresse).subscribe(() => this.dialogRef.close())
    }
  }

  add(){
    let adresse = {...{idContact : this.data.idContact}, ...this.formAdresse.value};
    console.log(adresse);
    this.adresseService.addAdresse(adresse as Adresse).subscribe(() => this.dialogRef.close());
  }

  valider(){
    if(this.data.id){
      this.save(this.data.id, this.data.idContact)
      console.log("on modifie")
    }else{
      this.add();
      console.log("on ajoute");
    }
  }

}
