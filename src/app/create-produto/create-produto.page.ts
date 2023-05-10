import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto.Model';
import { ProdutosService } from '../services/produtos.service';

@Component({
    selector: 'app-create-produto',
    templateUrl: './create-produto.page.html',
    styleUrls: ['./create-produto.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateProdutoPage implements OnInit {

    titulo = '';
    descricao = '';
    preco = '';

    constructor(private router: Router, private produtosService: ProdutosService) { }

    ngOnInit() {
    }


    salvar() {
        const produto: Produto = {
            titulo: this.titulo,
            descricao: this.descricao,
            preco: this.preco
        }
        this.produtoService.create(produto).subscribe(dados => {
            alert("Produto inserido com sucesso, id: " + dados.id)
            this.router.navigateByUrl('/lista-produtos');
        })
    }

}