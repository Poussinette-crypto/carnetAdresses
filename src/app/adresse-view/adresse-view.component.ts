import { Component, OnInit } from '@angular/core';
import {AdresseService} from "../adresse.service";
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adresse-view',
  templateUrl: './adresse-view.component.html',
  styleUrls: ['./adresse-view.component.scss']
})
export class AdresseViewComponent implements OnInit {
  adresses=[];
  constructor(
    private adresseService: AdresseService,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAdresses()
  }

  getAdresses(){
    const idContact = Number(this.route.snapshot.paramMap.get('id'));
    this.adresseService.getAdresses().subscribe(adresses =>  adresses.forEach(adresse => {
      if (adresse.idContact === idContact){
        this.adresses.push(adresse);
      }}));
    console.log(this.adresses);
  }

}
