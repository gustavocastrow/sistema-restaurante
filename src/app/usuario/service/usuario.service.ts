import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/model-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  urlBase = environment.url;

  constructor(
    private http: HttpClient) { }

  get = (): Observable<any[]> => {
    const requestHttpOptions: Object = { ...this.httpOptions };
    return this.http.get<any[]>(this.urlBase + 'usuario', requestHttpOptions).pipe(
    );
  }

  getById = (id: number ): Observable<Usuario> => {
    const requestHttpOptions: Object = { ...this.httpOptions };
    return this.http.get<Usuario>(this.urlBase + 'usuario/' + id, requestHttpOptions).pipe(
    );
  }

  post = (usuario: Usuario): Observable<any> => {
    const requestHttpOptions: Object = { ...this.httpOptions };
    return this.http.post<Usuario>(this.urlBase + 'usuario', JSON.stringify(usuario), requestHttpOptions).pipe(
    );
  }

}
