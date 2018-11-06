import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  login(){
  	let formData = {};
    formData['name'] = "sunilkumar"
  	formData['email'] = "s1729k@gmail.com"
  	formData['password'] = "krishna@1"
    // formData['password_confirmation'] = "krishna@1"
  	const url = environment.baseUrl + "login"
  	this.http.post(url, formData).subscribe((data:any) =>{
  		console.log(data);
  	});
  }

}
