import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { MesaComponent } from './mesa/mesa.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidoComponent,
    ProdutoComponent,
    MesaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
