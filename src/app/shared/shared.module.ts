import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { ElerefDirective } from './eleref.directive';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ElerefDirective, CookieConsentComponent],
  exports:[
  	CommonModule,
  	FormsModule,
  	ElerefDirective,
  ]
})
export class SharedModule { }
