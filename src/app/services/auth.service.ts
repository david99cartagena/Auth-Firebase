import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyDb_2_HkKBINbe4UcMaWyglP8M9Qmveizs';
  private returnSecureToken = true;
  userToken: string = '';

  // crear Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
    this.userToken = '';
  }

  login(usuario: UsuarioModel): Observable<AuthResponse> {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario,
      returnSecureToken: this.returnSecureToken,
    };

    return this.http
      .post<AuthResponse>(
        `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
        authData
      )
      .pipe(
        tap((resp) => {
          console.log('entro en el mapa de RXJS');
          this.guardarToken(resp.idToken); // usamos tap en vez de map
        })
      );
  }

  nuevoUsuario(usuario: UsuarioModel): Observable<AuthResponse> {
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario,
      returnSecureToken: this.returnSecureToken,
    };

    return this.http
      .post<AuthResponse>(
        `${this.url}/accounts:signUp?key=${this.apikey}`,
        authData
      )
      .pipe(
        tap((resp) => {
          console.log('entro en el mapa de RXJS');
          this.guardarToken(resp.idToken);
        })
      );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(hoy.getSeconds() + 3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(): string {
    const token = localStorage.getItem('token');
    this.userToken = token ?? '';
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (!this.userToken || this.userToken.length < 2) return false;

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date(expira);

    return expiraDate > new Date();
  }
}
