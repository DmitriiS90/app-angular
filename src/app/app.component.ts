import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
// import { products as data} from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // OnInit - метод жизненого цикла компонента
  title = 'app-angular';

  // products: IProduct[] = data;
  products: IProduct[] = [];

  constructor(private productsService: ProductService){}
  ngOnInit():void {
    this.productsService.getAll().subscribe((products)=>{
      this.products = products
    })
  }
}
