import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsDto } from '../../auth/dto/credentials.dto';
import { AuthService } from '../../auth/services/auth.service';
import { CONSTANTES } from '../../constantes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe(
      (data) => {
        // 1 Sauvgarder le token dans le localStorage
        localStorage.setItem('token', data.id);
        this.toaster.success(`Bienvenu :D`);
        // 2 Rediriger le user vers la page cv
        this.router.navigate([CONSTANTES.router.CV_PREFIX]);
      },
      (erreur) => {
        this.toaster.error(`Veuillez vérifier vos credentials`);
      }
    );
  }
}
