import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../service/webapi.service';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit {

  productData:any;
  constructor(private service: WebapiService) {
    this.loddAll();
   }

  ngOnInit(): void {
  }

  loddAll(){
    this.service.loadAllWebApi()
    .subscribe(
      data=> {
        this.productData = data;
        console.log(this.productData);
      });
  }
}
