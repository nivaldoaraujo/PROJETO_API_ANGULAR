import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/service/servicos.service';
import { AlunoModel } from './aluno.model';
ServicosService
//não esqueça de importar no appModule e no providers

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit{
  //chamamos as variáveis do aluno.model.ts
  aluno: AlunoModel = new AlunoModel()
  
  alunos: Array<any> = new Array()

  constructor(private alunosService: ServicosService){}

  ngOnInit(): void {
    this.ListarAlunos()
    
  }
  
  ListarAlunos(){
    this.alunosService.ListarAlunos().subscribe(alunos => {
        //atribuir ao vetor o nosso retorno
        this.alunos = alunos
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }
  //2º etapa
  cadastrar(){
    console.log(this.aluno)
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel()
      this.ListarAlunos()
    }, err => {
      console.log('Erro ao cadastrar aluno', err)
    }
    )
  }
  atualizar(id: number){    
    this.alunosService.atualizarAluno(id, this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel()
      this.ListarAlunos()
    }, err => {
      console.log('Erro ao atualizar aluno', err)
    })
  }
  remover(id: number){
    this.alunosService.removerAluno(id).subscribe(aluno => {
      this.aluno = new AlunoModel()
      this.ListarAlunos()
  }, err => {
    console.log('Erro ao remover aluno', err)
  })
}
}
