import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  pedido(){
    this.router.navigateByUrl('pedido')
  }

}
