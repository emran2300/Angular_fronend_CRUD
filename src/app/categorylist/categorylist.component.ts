import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categoryData: any;
  constructor(private service: CategoryService) { 
    this.loadAll();
  }

  ngOnInit(): void {
  }

  loadAll(){
    this.service.loadAllCategory().subscribe(data =>{
      this.categoryData=data;
      console.log(data);
    });
  }

  delete(id:any){
    if(confirm("Want to delete?")){
      this.service.deleteCategory(id).subscribe(data =>{
        this.loadAll();
      });
    }
  }
}
