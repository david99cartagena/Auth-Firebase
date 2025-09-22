import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordame = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    /* this.usuario.email = 'davidcartago@gmail.com';
    this.usuario.nombre = 'davidcartago';
    this.usuario.password = '123456'; */
    const email = localStorage.getItem('email');
    if (email) {
      this.usuario.email = email;
      this.recordame = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    
    console.log('Datos del formulario:', this.usuario);

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor ...',
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe({
      next: (resp) => {
        if (this.recordame) {
          localStorage.setItem('email', this.usuario.email);
        }
        console.log('✅ Usuario creado con éxito:', resp);
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('❌ Error al crear usuario:', err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al crear usuario',
          text: err.error.error.message,
        });
      },
    });
  }
}
