import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.css']
})
export class CategoryeditComponent implements OnInit {

  categoryData: any;
  savecategoryData: any;
  messageclass = '';
  message = '';
  editData: any;
  categoryId: any;

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId != null && this.categoryId != 0) {
      this.updateCategory(this.categoryId);
    }
  }

  updateCategory(id: any) {
    this.service.getbyIdCategory(id).subscribe(data => {
      this.editData = data;
      console.log(this.editData);
      if (this.editData != null) {
        this.categoryForm = new FormGroup({
          catId: new FormControl(this.editData.catId),
          catName: new FormControl(this.editData.catName)
        });
      }
    });
  }

  categoryForm = new FormGroup({
    catId: new FormControl({ value: '', disabled: true }),
    catName: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  
  saveChangeCategory() {
    if (this.categoryForm.valid) {
      //console.log(this.categoryForm.value);
      this.service.saveChangeCategory(this.categoryForm.value,this.categoryId)
      .subscribe({
        next: (respponse) => {
          this.router.navigate(['category']);
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
    return this.categoryForm.get('catName');
  }
}
