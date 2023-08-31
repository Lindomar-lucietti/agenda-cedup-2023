import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia:string = '';
  public descricao:string ='';
  public datahora:string = '';

  constructor(
    public local_storage:LocalStorageService
  ) { }

  ngOnInit() {
  }

  salvar(){
  /* criado o comando salvar, não escrever o void vai retornar vazio  */
  let compromisso = {
      materia:this.materia,
      descricao:this.descricao
  };

  this.local_storage.salvar('compromisso',compromisso);
    alert('Salvo com sucesso!');
  }
}
