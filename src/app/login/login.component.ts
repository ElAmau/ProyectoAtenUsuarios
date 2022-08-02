import { Component, OnInit } from '@angular/core';
import { ConectaserverService, modelo, modeloLogin } from '../services/conectaserver.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recupera: modeloLogin[]=[]
  constructor(private conectaserver:ConectaserverService) {

   }
ejecutaconsulta(){
  this.conectaserver.consultar().subscribe(
    res =>{
      console.log(res)
      this.recupera=res
    }
  )
}
  ngOnInit(): void {
    this.ejecutaconsulta();
  }

}
