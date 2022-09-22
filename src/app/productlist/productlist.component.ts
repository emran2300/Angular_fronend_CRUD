import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productData: any;
  categoryData: any;
  constructor(private pservice: ProductService, private cservice: CategoryService) {
    this.loadAll();
  }

  ngOnInit(): void {
  }
  loadAll() {
    this.pservice.loadAllProduct().subscribe(data => {
      this.productData = data;
      console.log(this.productData);
    });
    this.cservice.loadAllCategory().subscribe(data => {
      this.categoryData = data;
    });
  }

  delete(id: any) {
    if (confirm("Want to delete?")) {
      this.pservice.deleteProduct(id).subscribe(data => {
        this.loadAll();
      });
    }
  }
}
