import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  post<T>(endpoint: string, body: any): Observable<T> {
    console.log("apiservice");
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  ValidarLogin(dados: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, dados).pipe(
      tap((resposta) => console.log('Resposta da API:', resposta))
    );
  }

}
