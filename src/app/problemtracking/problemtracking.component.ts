import { Component, OnInit } from '@angular/core';
import { ConectaserverService, modelo, segui } from '../services/conectaserver.service';

@Component({
  selector: 'app-problemtracking',
  templateUrl: './problemtracking.component.html',
  styleUrls: ['./problemtracking.component.css']
})
export class ProblemtrackingComponent implements OnInit {
  recupera: segui[] = []
  constructor(private conectaserver: ConectaserverService) {

  }
  ejecutaconsulta() {
    this.conectaserver.consultar().subscribe(
      res => {
        console.log(res)
        this.recupera = res
      }
    )
  }
  ngOnInit(): void {
    this.ejecutaconsulta();
  }


}
