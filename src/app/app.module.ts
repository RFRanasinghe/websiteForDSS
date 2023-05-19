import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DesktopPageComponent } from './desktop-page/desktop-page.component';
import { MobilePageComponent } from './mobile-page/mobile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DesktopPageComponent,
    MobilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'desktop-page', component: DesktopPageComponent },
      { path: 'mobile-page', component: MobilePageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
