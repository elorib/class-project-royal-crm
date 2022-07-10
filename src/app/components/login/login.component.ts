import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sendPasswordResetEmail } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  error = '';
  constructor(
    private authService: AuthService,
    private routerService: Router
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (!valid) {
      return;
    }
    try {
      await this.authService.loginEmail(this.form.email, this.form.password);
      this.routerService.navigate(['/dashboard']);
    } catch (error) {
      console.dir(error);
      this.error = (error as Error).message;
    }
  }

  async loginGoogle() {
    return await this.authService.loginGoogle();
  }

  async login(email: string, password: string) {
    return await this.authService.loginEmail(email, password);
  }

  async logout() {
    return await this.authService.logout();
  }

  ngOnInit(): void {}
}
