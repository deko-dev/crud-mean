import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Producto {
  _id?: string,
  name: string,
  category: string,
  precio: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private url = "https://server-node-mean.herokuapp.com/api/productos";


  constructor(
    private http: HttpClient
  ) { }


  getProductos(){

    return this.http.get(this.url)
  }

  obtenerProducto(_id: string){
    return this.http.get(`${this.url}/${_id}`);
  }

  crearProducto(producto:Producto){
    return this.http.post(this.url, producto);
  }

  editarProducto( producto: Producto ){
    return this.http.put(`${this.url}/${producto._id}`, producto);
  }

  borrarProducto( _id:string ) {
    return this.http.delete(`${this.url}/${_id}`);
  }

}
