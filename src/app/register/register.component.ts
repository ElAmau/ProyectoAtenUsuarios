import { Component, OnInit } from '@angular/core';
import { ConectaserverService, modelo } from '../services/conectaserver.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  recupera:any=[];
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
    this.ListarRegistro();
  }

  ListarRegistro()
  {
    this.conectaserver.getRegistro().subscribe(
      res=>{
        this.recupera=res;
        console.log(res);
      },
     err => console.log(err)
    );
  }
}
