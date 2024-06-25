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
  public user = computed(() => {
    console.log(this.authService.currentUser());
    
    return this.authService.currentUser();
  });
  public authStatus = computed(() =>  this.authService.authStatus());

  


}
