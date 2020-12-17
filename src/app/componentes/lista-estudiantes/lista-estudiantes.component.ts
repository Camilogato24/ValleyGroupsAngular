import { Component, Input, OnInit } from '@angular/core';

export interface Estudiante{
  nombre: string;
  curso: string;
  activo: boolean;
  created_at?: Date;
  id?: number;
  updated_at?: Date;
}

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {
  // variable donde se guardará la lista de estudiantes
  estudiantesArray: Estudiante[] = []
  // variable que recibe el valor del hermano, y el padre
  @Input() estudianteLista: Estudiante[]
  constructor() { }

  ngOnInit(): void {
    //Se asigna el valor emitido por los otros componentes y servicio.
    this.estudiantesArray = this.estudianteLista
  }

}
