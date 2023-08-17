import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia:string = '';
  public descricao:string ='';
  public datahora:string = '';

  constructor() { }

  ngOnInit() {
  }

  salvar(){
  /* criado o comando salvar, não escrever o void vai retornar vazio  */
    alert('A matéria digitada foi ' + this.materia);
  }
}
