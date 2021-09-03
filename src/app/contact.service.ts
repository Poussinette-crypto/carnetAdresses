import { Injectable } from '@angular/core';
import {Contact} from "./contact";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  private contactsUrl = 'api/contacts';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  getContact (id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, this.httpOptions);
  }

  addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions);
  }

  deleteContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url, this.httpOptions);
  }
}
