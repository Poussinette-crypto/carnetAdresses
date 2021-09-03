import { Injectable } from '@angular/core';
import {Adresse} from "./contact";
import{Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactService} from "./contact.service";

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(
    private http: HttpClient,
    private contactService: ContactService
  ) { }

  private adressesUrl = 'api/adresses';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getAdresses (): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.adressesUrl);
  }

  getAdresse (id: number): Observable<Adresse> {
    const url = `${this.adressesUrl}/${id}`;
    return this.http.get<Adresse>(url);
  }

  updateAdresse(adresse: Adresse): Observable<any> {
    return this.http.put(this.adressesUrl, adresse, this.httpOptions);
  }

  addAdresse(adresse: Adresse): Observable<Adresse>{
    return this.http.post<Adresse>(this.adressesUrl, adresse, this.httpOptions);
  }

  deleteAdresse(adresse: Adresse): Observable<Adresse> {
    const url = `${this.adressesUrl}/${adresse.id}`;
    return this.http.delete<Adresse>(url, this.httpOptions);
  }
}
