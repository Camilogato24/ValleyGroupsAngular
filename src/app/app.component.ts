import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ValleyGroup';

  constructor(private primengConfig: PrimeNGConfig) { }
  enviarEstudiante: any;

  estudianteCreadoParaLista(estudiateEnviado: any) {
    this.enviarEstudiante = estudiateEnviado;
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
