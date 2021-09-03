import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from "../contact";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-liste-carnet',
  templateUrl: './liste-carnet.component.html',
  styleUrls: ['./liste-carnet.component.scss']
})
export class ListeCarnetComponent implements OnInit {
  @ViewChild(`agGrid`) agGrid: AgGridAngular;
  gridApi;
  gridColumnApi;
  rowSelection;
  columnDefs;
  domLayout = "autoHeight"
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.columnDefs = [
      { field: 'firstName', sortable: true, filter: true},
      { field: 'lastName', sortable: true, filter: true }
    ];
    this.rowSelection = 'single';
  }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }
  goToDetail(): void {
    const selectedRows = this.gridApi.getSelectedRows();
    const contactId = selectedRows[0].id;
    this.router.navigate(['detail', contactId]);
  }

  onGridReady = (params) => {
    params.api.sizeColumnsToFit();
    params.api.resetRowHeights();
    this.gridApi = params.api;
    this.gridColumnApi =params.columnApi;
  }
  add(): void {
    let contact = {firstName: "Adelina", lastName: "Henrion", dateOfBirth: new Date(2001,10, 9), telephone: 12};

    this.contactService.addContact(contact as Contact).subscribe(hero => {
      this.contacts.push(hero);
      this.getContacts();
    });
  }
}
