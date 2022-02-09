import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/model-usuario';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarioLista: Usuario[] = [];

  constructor(private service: UsuarioService) {

  }

  ngOnInit(): void {
    this.listaUsuarios()
  }

  listaUsuarios(){
    this.service.get().subscribe(res => {
      this.usuarioLista = res
    });
  }



}


//todo :
// caso api não tenha usuario, mostrar um msng
// colocar um loading na pagina.
