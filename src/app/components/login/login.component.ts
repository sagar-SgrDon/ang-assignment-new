import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error: any | null;
  form: any;
  user: any;
  submitted: boolean = false;
  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.authService.user.subscribe((user) => (this.user = user));
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(
      (res) => {
        if (res && res.id) {
          const userData = JSON.stringify({ id: res.id, token: res.token });
          localStorage.setItem('user', userData);
          this.router.navigate(['/employee']);
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
