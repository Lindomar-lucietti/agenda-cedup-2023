import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public compromissos:Array<any> = [];
  constructor(
    public localstorage_service:LocalStorageService
  ) {
   this.compromissos = this.localstorage_service.get('compromisso');
  }
  excluir(indice:number){
    //console.log(indice); mostra a execucao do comando 
    this.compromissos.splice(indice,1);
    this.localstorage_service.del('compromisso', indice);// 'compromisso' é o banco, indice é o que quer excluir
  }

  getHora(data:string){//por parametro mandamos uma data string
   let hora = data.split("T")[1];// aqui vamos separar hora da data
  return hora;  // a hora já esta formatada não precisa mudar
  }
  
  getData(data:string){//por parametro mandamos uma data string
    let dt = data.split("T")[0];// aqui vamos separar hora da data
    let dia = dt.split("-")[2];
    let mes = dt.split("-")[1];
    let ano = dt.split("-")[0];
    return dia + '/' + mes + '/' + ano;  // a hora já esta formatada não precisa mudar
   }  
  
}
