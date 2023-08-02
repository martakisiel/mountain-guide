import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeaterForecastComponent } from './weater-forecast/weater-forecast.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    WeaterForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
