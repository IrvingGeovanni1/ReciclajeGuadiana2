import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //esto hace que el servicio sea accesible en toda la aplicacion 
})
export class ApiService {
  private http = inject(HttpClient); //Inyeccion del servicio HTTPclient
  private BaseUrl = 'http://localhost:8000'; //URL de la api

  //Ahora van los metodos
  //Metodos para obtener usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseUrl}/usuarios`);
  }
  //metodo para añadir
  addUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/usuarios`, usuario);
  }
  //metodo para actualizar
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrl}/usuarios/${id}`, usuario);
  }
  //metodo para borrar
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/usuarios/${id}`);
  }



  constructor() { }
}
