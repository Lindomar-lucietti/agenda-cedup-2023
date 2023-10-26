import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
public dados$:Array<any> = [];
  constructor() { }
//enviar os dados objetos transformando em string
// estamos adicionando na lista e incluindo na lista dos dados
//comando p/auto incremento "copia os dados antigos e adiciona novos" (this.dados$ = this.get(entidade);)
  post(entidade:string,dados:any){
    this.dados$ = this.get(entidade);
    this.dados$.push(dados);
    localStorage.setItem(entidade,JSON.stringify(this.dados$));
  }
// recebe os dados string transformando em objeto
  get(entidade:string){
    return JSON.parse(String(localStorage.getItem(entidade)));
  }
  del(entidade:string,indice:number){
    this.dados$.splice(indice,1);// vai apagar um por vez
    localStorage.setItem(entidade,JSON.stringify(this.dados$));
  }
}
// os indices são os numeros de id
