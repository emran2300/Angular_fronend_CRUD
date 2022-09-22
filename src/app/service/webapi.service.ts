import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  webapiUrl: string = 'https://www.pqstec.com/InvoiceApps/values/GetProductListAll'
  constructor(private http:HttpClient) { }

  loadAllWebApi(){
    return this.http.get(this.webapiUrl);
  }
}
