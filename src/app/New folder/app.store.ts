import { Injectable } from '@angular/core';

@Injectable()
export class AppStore {
	newTenant = {};
	newRentHouse = {};
	selectedTenant = {};
	selectedRentHouse = {};
	tenantList = [];
	rentHouseList = [];
	api_token = "";

	constructor() {}

	private getCookie(name: string) {
		let ca: Array<string> = document.cookie.split(';');
		let caLen: number = ca.length;
		let cookieName = `${name}=`;
		let c: string;

		for (let i: number = 0; i < caLen; i += 1) {
			c = ca[i].replace(/^\s+/g, '');
			if (c.indexOf(cookieName) == 0) {
			    return c.substring(cookieName.length, c.length);
			}
		}
		return '';
  	}
}