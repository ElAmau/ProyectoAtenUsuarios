import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProblemtrackingComponent } from './problemtracking/problemtracking.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PagemainComponent } from './pagemain/pagemain.component';
import { RegisterprobComponent } from './registerprob/registerprob.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CargadatosComponent } from './cargadatos/cargadatos.component';



const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'seguimiento', component: ProblemtrackingComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'micuenta', component: MicuentaComponent},
  {path: 'pagemain', component: PagemainComponent},
  {path: 'registerprob', component: RegisterprobComponent},
  {path: 'navbar2', component: Navbar2Component},
  {path: 'cargadatos', component: CargadatosComponent},
  {path: 'cargar', component:CargadatosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
