import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {


  constructor(private cservice: CategoryService, private pservice: ProductService) {
    this.loadAll();
  }

  categoryData: any;
  productData: any;
  saveproductData: any
  messageclass = '';
  message = '';

  ngOnInit(): void {
  }

  //load category for dropdown
  loadAll() {
    this.cservice.loadAllCategory()
      .subscribe(
        data => {
          this.categoryData = data;
          console.log(this.categoryData);
        });
    this.pservice.loadAllProduct()
      .subscribe(
        data => {
          this.productData = data;
        });

  }

  productForm = new FormGroup({
    proId: new FormControl({ value: '', disabled: true }),
    proName: new FormControl('', Validators.required),
    proStock: new FormControl('', Validators.required),
    proPrice: new FormControl('', Validators.required),
    //catId: new FormControl('', Validators.required),
    catName: new FormControl('', Validators.required),
  });

  saveProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);

      this.pservice.saveProduct(this.productForm.value)
        .subscribe(
          data => {
            var p = this.saveproductData = data;
            console.log(this.productData);

            if (p != null) {
              this.message = "Added sucessfully"
              this.messageclass = "sucess"
            }
            else {
              this.message = "save faild"
              this.messageclass = "error"
            }
          }
        )
    }
  }
  get name() {
    return this.productForm.get('proName');
  }
  get stock() {
    return this.productForm.get('proStock');
  }
  get price() {
    return this.productForm.get('proPrice');
  }
  get category() {
    return this.productForm.get('catName');
  }

}
