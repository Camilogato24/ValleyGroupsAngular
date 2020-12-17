import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstudianteServicioService } from '../../servicios/estudiante-servicio.service';

export interface Estudiante {
  nombre: string;
  curso: string;
  activo: boolean;
  created_at?: Date;
  id?: number;
  updated_at?: Date;
}

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss']
})


export class CrearEstudianteComponent implements OnInit {
  //Array inicial de la tabla estudiantes
  estudiantesArrayInitial: Estudiante[] = []
  //Array para emitir cuando se agregue un objeto en el array.
  finalEstudiante: Estudiante[] = []
  //valor emitido inicialmente para pintar la tabla del componente lista-estudiantes.component
  @Output() estudianteCreado = new EventEmitter<Estudiante[]>();
  // formulario reactivo de angular.
  estudiantesForm: FormGroup;
  //submit del form
  submitted = false;


  constructor(private fb: FormBuilder, private estudianteServicio: EstudianteServicioService) {
    //definición del formulario de angular con sus validaciones.
    this.estudiantesForm = this.fb.group({
      nombre: ['', Validators.required],
      activo: [false],
      curso: ['', Validators.required]

    })
  }



  ngOnInit(): void {
    //llamando el servicio que me alimenta la tabla
    this.estudianteServicio.getEstudiantes()
    .subscribe( estudiantes =>{
      this.estudiantesArrayInitial = estudiantes
      this.estudianteCreado.emit(this.estudiantesArrayInitial)
    })
  }

  onSubmit() {
    this.submitted = true;
    // Validación si el formulario es inválido.
    if (this.estudiantesForm.invalid) {
      return;
    }
    // Información del formulario
    alert('INFO!! :-)\n\n' + JSON.stringify(this.estudiantesForm.value, null, 4));
    this.crearEstudiante()
    this.onReset()
  }

  onReset() {
    //Método que se ejecuta para vaciar los valores del form.
    this.submitted = false;
    this.estudiantesForm.reset();
  }

  //Controles de acceso del formulario
  get form() { return this.estudiantesForm.controls }


  //Método del componente para crear un estudiante al servicio
  crearEstudiante(){
    return this.estudianteServicio.crearEstudiante(this.estudiantesForm.value)
    .subscribe(res => {
      this.estudiantesArrayInitial.push(res)
      this.estudianteCreado.emit(this.estudiantesArrayInitial)
    })
  }

}
