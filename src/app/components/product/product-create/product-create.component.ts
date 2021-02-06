import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : Product = {
    name : "",
    price : null
  }

  constructor(private productService: ProductService,
    private router : Router) { }

  ngOnInit(): void {

  }

  createProduct(){
    this.productService.create(this.product).subscribe(()=>{
      //retorna um Observable, faz isso depois de chamar o create : 
      this.productService.showMessage("Produto com sucesso");
      this.router.navigate(['/products'])
    })
    
  }

  cancel(){
    this.router.navigate(['/products'])
  }


}
