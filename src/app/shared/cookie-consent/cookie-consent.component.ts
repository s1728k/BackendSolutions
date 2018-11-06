import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {

  // private isConsented: boolean = false;

  constructor() {
      // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
  }

  ngOnInit() {
  }

  // private getCookie(name: string) {
  //     let ca: Array<string> = document.cookie.split(';');
  //     let caLen: number = ca.length;
  //     let cookieName = `${name}=`;
  //     let c: string;

  //     for (let i: number = 0; i < caLen; i += 1) {
  //         c = ca[i].replace(/^\s+/g, '');
  //         if (c.indexOf(cookieName) == 0) {
  //             return c.substring(cookieName.length, c.length);
  //         }
  //     }
  //     return '';
  // }

  // private deleteCookie(name) {
  //     this.setCookie(name, '', -1);
  // }

  // private setCookie(name: string, value: string, expireDays: number, path: string = '') {
  //     let d:Date = new Date();
  //     d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  //     let expires:string = `expires=${d.toUTCString()}`;
  //     let cpath:string = path ? `; path=${path}` : '';
  //     document.cookie = `${name}=${value}; ${expires}${cpath}`;
  // }

  // private consent(isConsent: boolean, e: any) {
  //     if (!isConsent) {
  //         return this.isConsented;
  //     } else if (isConsent) {
  //         this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
  //         this.isConsented = true;
  //         e.preventDefault();
  //     }
  // }

}
