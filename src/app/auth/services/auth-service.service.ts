import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    // Aquí revisamos si existe un token almacenado en localStorage
    return !!localStorage.getItem('jwt'); // O la lógica que uses para definir si está autenticado
  }

  login(token: string): void {
    // Almacena el token en localStorage al iniciar sesión
    localStorage.setItem('jwt', token);
  }

  logout(): void {
    // Limpia el token del localStorage
    localStorage.removeItem('jwt');
  }
}
