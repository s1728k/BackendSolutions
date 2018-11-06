import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

// import { SharedModule } from './shared/shared.module';

// import { AppRouting } from './app.routing';
// import { AppStore } from './app.store';

import { AppComponent } from './app.component';
// import { CRUDService } from './shared/crud.service';
// import { RestApiService } from './shared/rest-api.service';
// import { MessageService } from './shared/message.service';
// import { AuthGuard } from './shared/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    // HttpModule,
    // SharedModule,
    // AppRouting
  ],
  providers: [
    // AuthGuard, 
    // AppStore, 
    // CRUDService, 
    // RestApiService, 
    // MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
