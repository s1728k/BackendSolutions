import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-my-table-list',
  templateUrl: './my-table-list.component.html',
  styleUrls: ['./my-table-list.component.scss']
})
export class MyTableListComponent implements OnInit {

my_table_list = app.public_tables;
  constructor() { }

  ngOnInit() {
  }

}
