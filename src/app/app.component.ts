import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status-enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private authService = inject( AuthService );
  private router = inject( Router );

  public finishedAuthCheck = computed<boolean>( () => {
    console.log(this.authService.authStatus() )
    if ( this.authService.authStatus() === AuthStatus.cheking ) {
      return false;
    }

    return true;
  });


  public authStatusChangedEffect = effect(() => {

    console.log('auth:', this.authService.authStatus());
    

    switch( this.authService.authStatus() ) {

      case AuthStatus.cheking:
        return;

      case AuthStatus.authenticated:
        console.log('dashboard');
        
        this.router.navigateByUrl('/dashboard');
        return;

      case AuthStatus.notAuthenticated:
        console.log('login');
        
        this.router.navigateByUrl('/auth/login');
        return;

    }

  });


}
