import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productUrl: string= 'https://localhost:7219/api/product'

  constructor(private http:HttpClient) { }
  
  loadAllProduct(){
    return this.http.get(this.productUrl);
  }

  saveProduct(inputdata:any){
    return this.http.post(this.productUrl,inputdata);
  }
  getbyIdProduct(id:any){
    return this.http.get(this.productUrl+ '/' +id);
  }

  saveChangeProduct(inputdata:any,id:any){
    return this.http.put(this.productUrl+'/'+id,inputdata);
  }

  deleteProduct(id:any){
    return this.http.delete(this.productUrl+'/'+id);
  }
}
