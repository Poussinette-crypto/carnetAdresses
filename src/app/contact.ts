export interface Contact{
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  telephone: number;
}

export interface Adresse {
  id: number;
  idContact: number;
  typeAdresse: string;
  numeroVoie: number;
  typeVoie: string;
  intituleVoie: string;
  codePostal: number;
  ville: string;
  pays: string;
}
