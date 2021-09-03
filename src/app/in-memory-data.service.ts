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
      {id:1, firstName: "Zacharie", lastName: "Galarneau", dateOfBirth: new Date(1937,8, 16), telephone: 117612619},
      {id:2, firstName: "Joy", lastName: "Brochu", dateOfBirth: new Date(1963,5, 23),telephone: 207587761},
      {id:3, firstName: "Raison", lastName: "Arcouet", dateOfBirth: new Date(1950,5, 8),telephone: 175074915},
      {id:4, firstName: "Alaine", lastName: "D'aubigné", dateOfBirth: new Date(1958,3, 4),telephone: 339016182},
      {id:5, firstName: "Zdenek", lastName: "Bisson", dateOfBirth: new Date(1986,4, 16),telephone: 496629236},
      {id:6, firstName: "Carine", lastName: "Arsenault", dateOfBirth: new Date(1955,10, 18),telephone: 143177170},
      {id:7, firstName: "Eugenia", lastName: "Desroches", dateOfBirth: new Date(1992,4, 28),telephone: 249546594},
      {id:8, firstName: "Alexandrie", lastName: "Thibault", dateOfBirth: new Date(1937,12, 12),telephone: 427676030},
      {id:9, firstName: "Blanche", lastName: "Metivier", dateOfBirth: new Date(1964,9, 11),telephone: 320165769},
      {id:10, firstName: "Neville", lastName: "Arsenault", dateOfBirth: new Date(1989,2, 21),telephone: 144141664},
      {id:11, firstName: "Alexandrin", lastName: "Lévesque", dateOfBirth: new Date(1994,11, 7),telephone: 514339900},
      {id:12, firstName: "Aurélien", lastName: "Tremoulu", dateOfBirth: new Date(2003,10, 9),telephone: 12},
      {id:13, firstName: "Fabrice", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:14, firstName: "Lucas", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:15, firstName: "Sara", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:16, firstName: "Rémy", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:17, firstName: "Lilou", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:18, firstName: "Amberle", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:19, firstName: "Gabriel", lastName: "Tremoulu", dateOfBirth: new Date(1990,10, 9),telephone: 12},
      {id:20, firstName: "Kyliann", lastName: "Tremoulu", dateOfBirth: new Date(2001,10, 9),telephone: 12},
    ];
    let adresses = [
      {id:1, idContact: 1, typeAdresse: "Domicile", numeroVoie: 39, typeVoie: "Place", intituleVoie: "De la Madeleine", codePostal: 75009, ville:"Paris", pays:"France"},
      {id:2, idContact: 2, typeAdresse: "Travail", numeroVoie: 6, typeVoie: "Rue", intituleVoie: "Napoléon", codePostal: 56600, ville:"Paris", pays:"France"},
      {id:3, idContact: 1, typeAdresse: "Domicile", numeroVoie: 70, typeVoie: "Rue", intituleVoie: "Sadi Carnot", codePostal: 93600, ville:"Aulnay-Sous-Bois", pays:"France"},
      {id:4, idContact: 4, typeAdresse: "Autre", numeroVoie: 91, typeVoie: "Rue", intituleVoie: "De Lille", codePostal: 62000, ville:"Arras", pays:"France"},
      {id:5, idContact: 1, typeAdresse: "Domicile", numeroVoie: 17, typeVoie: "Rue", intituleVoie: "Du Château", codePostal: 42100, ville:"Saint-Etienne", pays:"France"},
      {id:6, idContact: 1, typeAdresse: "Domicile", numeroVoie: 29, typeVoie: "Rue", intituleVoie: "Nationale", codePostal: 75003, ville:"Paris", pays:"France"},
      {id:7, idContact: 1, typeAdresse: "Domicile", numeroVoie: 94, typeVoie: "Rue", intituleVoie: "Frédéric Chopin", codePostal: 27200, ville:"Vernon", pays:"France"},
      {id:8, idContact: 1, typeAdresse: "Domicile", numeroVoie: 4, typeVoie: "Rue", intituleVoie: "Beauvau", codePostal: 13002, ville:"Marseille", pays:"France"},
      {id:9, idContact: 1, typeAdresse: "Domicile", numeroVoie: 14, typeVoie: "Rue", intituleVoie: "Marie de Médicis", codePostal: 62400, ville:"Béthune", pays:"France"},
      {id:10, idContact: 1, typeAdresse: "Domicile", numeroVoie: 65, typeVoie: "Rue", intituleVoie: "Saint Germain", codePostal: 92230, ville:"Gennevilliers", pays:"France"},

    ]
    return {contacts, adresses};
  }

  genId<T extends Contact | Adresse>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}
