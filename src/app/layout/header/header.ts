import { Component,inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  authService = inject(AuthService);
  private router = inject(Router);

  async SeDeconneecter(){
    await this.authService.deconnexion();
    this.router.navigate(['/login'])
  }
}
