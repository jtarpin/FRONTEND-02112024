import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../services/auth-service.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // El usuario está autenticado, permite el acceso
    } else {
      this.router.navigate(['/login']); // Redirige a login si no está autenticado
      return false; // Bloquea el acceso
    }
  }
}
