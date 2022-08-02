import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProblemtrackingComponent } from './problemtracking/problemtracking.component';
import { PagemainComponent } from './pagemain/pagemain.component';
import { RegisterprobComponent } from './registerprob/registerprob.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { LoginComponent } from './login/login.component';

import { CargadatosComponent } from './cargadatos/cargadatos.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    ProblemtrackingComponent,
    RegisterComponent,
    MicuentaComponent,
    PagemainComponent,
    CatalogoComponent,
    NavbarComponent,
    Navbar2Component,
    LoginComponent,
    CargadatosComponent,
    RegisterprobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
