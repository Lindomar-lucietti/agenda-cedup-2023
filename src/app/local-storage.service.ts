import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvar(entidade:string,dados:any){
    localStorage.setItem(entidade,JSON.stringify(dados));
  }
}
