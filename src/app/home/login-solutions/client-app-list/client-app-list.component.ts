import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $;

@Component({
  selector: 'app-client-app-list',
  templateUrl: './client-app-list.component.html',
  styleUrls: ['./client-app-list.component.scss']
})
export class ClientAppListComponent implements OnInit {

	newClientApp = {};
  constructor(private http:RestApiService) { }

  ngOnInit() {
    this.getMyApps();
  }

  createNewApp(){
  	let formData = this.newClientApp;
  	this.http.url = environment.baseUrl + "oauth/clients"
  	this.http.addObj(formData).subscribe((data:any) =>{
  		console.log(data);
  	});
  }

  getMyApps(){
    this.http.url = environment.baseUrl + "oauth/clients"
    this.http.getObjs().subscribe((data:any) =>{
      console.log(data);
    });
  }

}
