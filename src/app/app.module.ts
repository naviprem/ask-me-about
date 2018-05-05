import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreLoginMenuComponent } from './pre-login-menu/pre-login-menu.component';
import { PostLoginMenuComponent } from './post-login-menu/post-login-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PreLoginMenuComponent,
    PostLoginMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
