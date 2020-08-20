import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  productos: Producto[] = []; 

  constructor(
    private _productosServices :ProductosService
  ) { 
    this._productosServices.getProductos()
                          .subscribe((response: Producto[])=> {

                            console.log( typeof response )

                            this.productos = response;

                          });
  }

  ngOnInit(): void {
  }

  borrarProducto(_id:string, index:number){

    this._productosServices.borrarProducto(_id)
                            .subscribe((res)=>{
                              this.productos.splice(index, 1);

                            });

  }

}
