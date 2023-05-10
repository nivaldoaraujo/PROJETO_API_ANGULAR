import { Injectable } from '@angular/core';

//importando httpClient e Observable
import { HttpClient } from '@angular/common/http'
import {  Observable } from 'rxjs'
import { AlunoModel } from '../alunos/alunos/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private url: string = "http://localhost:3000/alunos/"

  constructor(private http: HttpClient) { } 

  ListarAlunos() : Observable<any> {
    return this.http.get(`${this.url}`)
  }

  //2º etapa
  cadastrarAluno(aluno: AlunoModel): Observable<any>{
    return this.http.post('http://localhost:3000/alunos/', aluno)
  }
  //Metodos para atualizar e  remover
  atualizarAluno(id: any, aluno: AlunoModel): Observable<any>{
    return this.http.put('http://localhost:3000/alunos/'.concat(id), aluno )
  }
  removerAluno(id:any){
    return this.http.delete('http://localhost:3000/alunos/'.concat(id))
  }
  

}
