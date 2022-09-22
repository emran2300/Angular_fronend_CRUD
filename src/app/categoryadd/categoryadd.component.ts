import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']
})
export class CategoryaddComponent implements OnInit {
  
  categoryData: any;
  savecategoryData: any;
  messageclass = '';
  message = '';
  editData:any;
  categoryId:any;


  constructor(private service: CategoryService, private route:ActivatedRoute) {
    // this.categoryId = this.route.snapshot.paramMap.get('id');
    // if(this.categoryId != null && this.categoryId != 0){
    //   this.updateCategory(this.categoryId);
    // }
    this.loadAll();
  }

  ngOnInit(): void {
  }

  // updateCategory(id: any) {
  //   this.service.getbyIdCategory(id).subscribe(data => {
  //     this.editData = data;
  //     console.log(this.editData);
  //     if (this.editData != null) {
  //       this.categoryForm = new FormGroup({
  //         catId: new FormControl(this.editData.catId),
  //         catName: new FormControl(this.editData.catName)
  //       });
  //     }
  //   });
  // }

  categoryForm = new FormGroup({
    catId: new FormControl({ value: '', disabled: true }),
    catName: new FormControl('', Validators.required),
  });

  loadAll() {
    this.service.loadAllCategory().subscribe(data => {
      this.categoryData = data;
    });
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);
      this.service.saveCategory(this.categoryForm.value).subscribe(data => {
        var s = this.savecategoryData = data;
        console.log(this.categoryData);

        if (s != null) {
          this.message = "save sucessfully"
          this.messageclass = "sucess"
        }
        else {
          this.message = "save faild"
          this.messageclass = "error"
        }
      });
    }
  }

  get name() {
    return this.categoryForm.get('catName');
  }
}
