import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryUrl: string= 'https://localhost:7219/api/category'

  constructor(private http:HttpClient) { }

  loadAllCategory(){
    return this.http.get(this.categoryUrl);
  }
  saveCategory(inputdata:any){
    return this.http.post(this.categoryUrl,inputdata);
  }
  getbyIdCategory(id:any){
    return this.http.get(this.categoryUrl+ '/' +id);
  }

  saveChangeCategory(inputdata:any,id:any){
    return this.http.put(this.categoryUrl+'/'+id,inputdata);
  }

  deleteCategory(id:any){
    return this.http.delete(this.categoryUrl+'/'+id);
  }
}
