import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnviarDatosService } from '../../auth/enviar-datos.service';
import { emailPattern, passwordPattern } from '../../auth/validators/validators';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../../shared/material/ng-material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgMaterialModule],
  providers: [EnviarDatosService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;


  constructor(private formbuilder: FormBuilder, private enviarDatosServicio: EnviarDatosService,private router: Router){

    //FORMULARIO
    this.formLogin = this.formbuilder.group({

      email: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40), Validators.pattern(emailPattern)]],

      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern(passwordPattern)]],

    });

  }


  enviarDatos() {

    if (this.formLogin.valid) {

      this.enviarDatosServicio.enviarFormularioLogin(this.formLogin.value).subscribe({
        next: (response) => {
          //MANEJAR RESPUESTA EXITOSA
            console.info('Inicio de sesión exitoso:', response);
            this.router.navigate(['/launchpad']); // Redirigir al launchpad
          },
        error: (error) => {
          console.warn(error);
        },
        complete: () => {
          console.info('Enviado con exito.');
        },
      });

    } else {
      // console.log(this.formRegister.value)
      console.warn('Datos no enviados, verifique los requisitos o contacte al administrador.');
    }

  }
}
