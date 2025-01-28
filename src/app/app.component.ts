import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, Router, NavigationEnd, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../app/auth.service';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gestão de Finanças';
  isHome: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota ativa é "home"
        this.isHome = event.url === '/home' || event.url === '/inserir_valores';
      }
    });
  }
  deslogar(){
    this.authService.logout();
    console.log('ab')
    this.router.navigate(['/login']); // Redireciona para a rota protegida
    console.log('cd')
  }
}
