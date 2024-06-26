import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  standalone: true,
  imports: [
    CommonModule,

    RouterModule,
    ReactiveFormsModule,],
  providers: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  public authService = inject(AuthService);
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email: ['gabriel.rosa@arcmexdp.com', [Validators.required, Validators.email]],
    password: ['Password.1234', [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (errorMessage) => {
          Swal.fire('Error', errorMessage, 'error')
        }
      });
  }

}
