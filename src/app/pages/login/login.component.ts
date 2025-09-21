import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioModel } from "src/app/models/usuario.model";
import { AuthService } from "src/app/services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  recordame = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem("email")) {
      this.usuario.email = localStorage.getItem("email");
      this.recordame = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espere por favor ...",
    });
    Swal.showLoading();

    // console.log("Imprimir formulario si es valido");
    // console.log(this.usuario);
    // console.log(form);

    this.auth.login(this.usuario).subscribe({
      next: (resp) => {
        if (this.recordame) {
          localStorage.setItem("email", this.usuario.email);
        }

        console.log("✅ Usuario logueado con éxito:", resp);
        Swal.close();
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error("❌ Error al autenticar:", err.error.error.message);
        Swal.fire({
          type: "error",
          title: "Error al autenticar",
          text: err.error.error.message,
        });
      },
    });
  }
}
