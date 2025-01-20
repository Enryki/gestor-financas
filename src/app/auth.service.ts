import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';

  // Simula o login armazenando um token (pode ser substituído por uma chamada à API)
  login(usuario: string, senha: string): boolean {
    if (usuario === 'teste' && senha === '123') {
      localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token'); // Token fictício
      return true; // Login bem-sucedido
    }
    return false; // Credenciais inválidas
  }


  // Remove o token para simular o logout
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Verifica se o usuário está autenticado
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // Retorna o token armazenado
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
