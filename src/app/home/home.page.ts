import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/Cliente.model';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {

listaClientes: Cliente[] = [];

  constructor(private clienteServices: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clienteServices.getAll().subscribe(dados =>{
      this.listaClientes = dados as Cliente[];
    });
  }
}
