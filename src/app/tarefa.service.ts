import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseUrl = 'http://localhost:8080/painel/api/v1/tarefas';

  constructor(private http: HttpClient) { }

  getTarefa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTarefa(tarefa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tarefa);
  }

  updateTarefa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTarefasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}