import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap } from 'rxjs';

interface UserDTO {
  id: number;
  username: string;
  email: string;
}

interface AuthResponse {
  user: UserDTO;
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private apiService: ApiService) { }

  registrar(usuario: String, email: String, senha: String, confirmar_senha: String){
    return this.apiService.post<AuthResponse>("api/registrar", {username: usuario, email: email, password: senha, confirm_password: confirmar_senha})
  }
}
