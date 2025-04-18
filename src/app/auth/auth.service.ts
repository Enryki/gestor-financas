import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap } from 'rxjs';

interface LoginResponse {
  token: string;
  // Outros campos, se houver (ex: 'user', 'expiresIn')
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  constructor(private apiService: ApiService) {}

  login(usuario: string, senha: string): Observable<boolean> {
    return this.apiService.ValidarLogin({ username: usuario, password: senha }).pipe(
      map((resposta: LoginResponse) => {
        if (resposta && resposta.token) {
          localStorage.setItem('authToken', resposta.token);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }





  // Remove o token para simular o logout
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Verifica se o usuário está autenticado
isLoggedIn(): boolean {
  const token = localStorage.getItem(this.TOKEN_KEY);
  console.log('Token no localStorage:', token);  // Verifique se o token está no localStorage
  return !!token;
}

  // Retorna o token armazenado
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
