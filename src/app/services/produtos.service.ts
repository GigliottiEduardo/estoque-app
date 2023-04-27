import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  create(produto: Produto){
    return this.http.post(this.url, produto)
  }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    //return this.http.get(this.url + '/' + id);
    return this.http.get('${this.url}/${id}');
  }

  update(produto: Produto){
    return this.http.put('${this.url}/$(cliente.id)', produto);
  }

  delete(){}

  login(){}

  logout(){}
}
