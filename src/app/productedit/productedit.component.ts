import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  categoryData: any;
  productData: any;
  messageclass = '';
  message = '';
  editData: any;
  productId: any;

  constructor(private cservice: CategoryService, private pservice: ProductService, private route: ActivatedRoute, private router: Router) {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId != null && this.productId != 0) {
      this.updateProduct(this.productId);
    }
    this.loadAll();
  }

  loadAll() {
    this.cservice.loadAllCategory()
      .subscribe(
        data => {
          this.categoryData = data;
          console.log(this.categoryData);
        });
      }

  updateProduct(id: any) {
    this.pservice.getbyIdProduct(id).subscribe(data => {
      this.editData = data;
      console.log(this.editData);
      if (this.editData != null) {
        this.productForm = new FormGroup({
          proId: new FormControl(this.editData.proId),
          proName: new FormControl(this.editData.proName),
          proStock: new FormControl(this.editData.proStock),
          proPrice: new FormControl(this.editData.proPrice),
          catName: new FormControl(this.editData.catName),
        });
      }
    });
  }

  productForm = new FormGroup({
    proId: new FormControl({ value: '', disabled: true }),
    proName: new FormControl('', Validators.required),
    proStock: new FormControl('', Validators.required),
    proPrice: new FormControl('', Validators.required),
    catName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  saveChangeCategory() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.pservice.saveChangeProduct(this.productForm.value,this.productId)
      .subscribe({
        next: (respponse) => {
          this.router.navigate(['product']);
        }
      // this.service.saveChangeCategory(this.categoryForm.value,this.categoryId).subscribe(data => {
      //   var s = this.savecategoryData = data;
      //   console.log(this.categoryData);

        // if (s != null) {
        //   this.message = "save sucessfully"
        //   this.messageclass = "sucess"
        // }
        // else {
        //   this.message = "save faild"
        //   this.messageclass = "error"
        // }
      });
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
