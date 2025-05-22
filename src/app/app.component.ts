import { Component, HostListener  } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, Router, NavigationEnd, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { MatMenuModule } from '@angular/material/menu'; 

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterOutlet, CommonModule, RouterModule,MatMenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gestão de Finanças';
  isHome: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url === '/home' || event.url === '/inserir_valores';
      }
    });
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 800;
  }
  deslogar(){
    this.authService.logout();
    console.log('ab')
    this.router.navigate(['/login']); // Redireciona para a rota protegida
    console.log('cd')
  }

}
