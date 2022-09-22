import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService) { 
    //this.loadCategory();
  }

  categoryData:any;
  ngOnInit(): void {
  }

  // loadCategory(){
  //   this.service.loadCategory().subscribe(result => {
  //     this.categoryData = result;
  //     console.log(this.categoryData);
  // })
  // }
}
