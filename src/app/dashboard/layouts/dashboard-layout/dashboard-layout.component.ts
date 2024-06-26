import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);
  // Carga la información del usuario
  public user = computed(() => this.authService.currentUser());
  public status = computed(() => this.authService.authStatus());

  // logout del usuario
  onLogout(){
    this.authService.logout();
  }

  


}
