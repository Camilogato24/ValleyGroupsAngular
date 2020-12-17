import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Estudiante {
  nombre: string;
  curso: string;
  activo: boolean;
  created_at?: Date;
  id?: number;
  updated_at?: Date;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EstudianteServicioService {
  apiUrl = 'http://127.0.0.1:8000/api/estudiantes'
  error: any
  estudiantes: any
  constructor(private http: HttpClient) { }

  /* Método para obtener todos los estudiantes de la tabla */
  getEstudiantes(): Observable<Estudiante[]>  {
    this.estudiantes = this.http.get<Estudiante[]>(this.apiUrl)
    return this.estudiantes
  }

/* Método para crear un estudiante en la tabla */
  crearEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    this.estudiantes.subscribe(data =>{
      data.push(estudiante)
    })
    return this.http.post<Estudiante>(this.apiUrl, estudiante, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling para los métodos.
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Obteniendo el error del cliente
      errorMessage = error.error.message;
    } else {
      // Obteniendo el error del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }



  
}
