import { Component, OnInit } from '@angular/core';
import { ConectaserverService, regprob } from '../services/conectaserver.service';
@Component({
  selector: 'app-registerprob',
  templateUrl: './registerprob.component.html',
  styleUrls: ['./registerprob.component.css']
})
export class RegisterprobComponent implements OnInit {

  recupera: regprob[] = []
  constructor(private conectaserver: ConectaserverService) { 
    
  }
  ejecutaconsulta() {
    this.conectaserver.consultar().subscribe(
      res => {
        console.log(res)
        this.recupera = res
      })
  }
 
  ngOnInit(): void {
    this.ejecutaconsulta();
  }
  
}
