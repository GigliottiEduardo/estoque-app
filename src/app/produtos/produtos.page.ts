import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

listaProdutos: Produto[] = [];

  constructor(private produtoServices: ProdutosService) {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtoServices.getAll().subscribe(dados =>{
      this.listaProdutos = dados as Produto[];
    });
  }
}
