import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Contact, Adresse} from "./contact";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let contacts = [
      {id:1, firstName: "Adeline", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9), telephone: 12},
      {id:2, firstName: "Jean-Paul", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:3, firstName: "Raphael", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:4, firstName: "Alice", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:5, firstName: "Marie", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:6, firstName: "Jean", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:7, firstName: "Sean", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:8, firstName: "Matthieu", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:9, firstName: "Axel", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:10, firstName: "Billy", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:11, firstName: "Cindy", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:12, firstName: "Solène", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:13, firstName: "Fabrice", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:14, firstName: "Lucas", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:15, firstName: "Sara", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:16, firstName: "Eodren", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:17, firstName: "Lilou", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:18, firstName: "Amberle", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:19, firstName: "Gabriel", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
      {id:20, firstName: "Kyliann", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9),telephone: 12},
    ];
    let adresses = [
      {id:1, idContact: 1, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
      {id:2, idContact: 2, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
      {id:3, idContact: 1, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
      {id:4, idContact: 4, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
      {id:5, idContact: 1, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
      {id:6, idContact: 1, typeAdresse: "Domicile", numeroVoie: 44, typeVoie: "Rue", intituleVoie: "Victor Hugo", codePostal: 75000, ville:"Paris", Pays:"France"},
    ]
    return {contacts, adresses};
  }

  genId<T extends Contact | Adresse>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}
