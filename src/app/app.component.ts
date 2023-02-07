import { Component, OnInit } from '@angular/core';
// import { Observable, tap } from 'rxjs';
// import { IProduct } from './models/product';
// import { ProductService } from './services/product.service';
// import { ModalService } from './services/modal.service';
// // import { products as data} from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // // OnInit - метод жизненого цикла компонента
  // title = 'app-angular';

  // // products: IProduct[] = data;
  // // products: IProduct[] = [];
  // // products$: Observable<IProduct[]>

  // loading = false

  // term = ''

  // constructor(public productsService: ProductService, public modalService:ModalService) { }
  // ngOnInit(): void {
  //   this.loading = true
  //   // this.products$ = this.productsService.getAll().pipe(
  //   //   tap(() => this.loading = false)
  //   // )

  //   // this.productsService.getAll().subscribe((products)=>{
  //   //   this.products = products
  //   //   this.loading = false
  //   // })

  //   this.productsService.getAll().subscribe(()=>{
  //     this.loading = false
  //   })
  // }
}
