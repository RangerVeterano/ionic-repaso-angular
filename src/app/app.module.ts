import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //importamos nuestras rutas
    PagesModule, //importamos todos nuestros componentes
    HttpClientModule //importamos modulo para las peticiones http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
