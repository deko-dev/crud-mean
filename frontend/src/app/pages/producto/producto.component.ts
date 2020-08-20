import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  _id: string = '';
  forma: FormGroup;
  isNew: boolean = false;
  nameProducto: string = '';
  productoSelected: Producto;

  constructor(
    private _productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.activatedRoute.params
                        .subscribe( (res) => {


                          if( !res.id ){
                            this.isNew = true;
                            this._id = '';
                            return;
                          }

                          this._id = res.id;
                        })


    this._productosService.obtenerProducto(this._id)
                            .subscribe( (response:Producto) => {

                              console.log( response );
                              // this.productoSelected = response;
                              this.cargarData(response)

                            })

     this.crearFormulario();                         

  }

  ngOnInit(): void {
  }

  guardar(){

    this.productoSelected = this.forma.value;


    if( !this.isNew ){
      this._productosService.editarProducto(this.productoSelected)
                            .subscribe( (response) => {
                              console.log( response );
                              this.router.navigateByUrl('home')
                            });
    }else {
      this._productosService.crearProducto(this.productoSelected)
                            .subscribe( (response) => {
                              console.log( response );
                              this.router.navigateByUrl('home')
                            });
    }
    

  }

  crearFormulario(){


    this.forma = this.formBuilder.group({
      _id: [''],
      name: [''],
      category: [''],
      precio: ['']
    })

  }

  cargarData(producto : Producto){

    this.nameProducto = producto.name;

    this.forma = this.formBuilder.group({
      _id: [producto._id],
      name: [producto.name],
      category: [producto.category],
      precio: [producto.precio]
    })



  }



}
