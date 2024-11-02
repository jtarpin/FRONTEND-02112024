import { EnviarDatosService } from './../../auth/enviar-datos.service';
import { AuthService } from '../../auth/services/auth-service.service'; // Asegúrate de que el AuthService esté correctamente importado
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

    constructor(
      private router: Router,
      private enviarDatosService: EnviarDatosService,
      private authService: AuthService // Inyectar el servicio de autenticación
    ) {}

    ngOnInit() {
      this.cerrarSesion();
    }

    cerrarSesion() {
      this.enviarDatosService.cerrarSesion().subscribe({
        next: () => {
          this.authService.logout(); // Limpia el estado de autenticación en el cliente
          this.router.navigate(['/login']); // Redirige al usuario a la página de login
        },
        error: (error) => {
          console.error('Error al cerrar sesión:', error);
        }
      });
    }
}
