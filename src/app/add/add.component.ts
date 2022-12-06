import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  productCode=""
  name=""
  mgDate=""
  exDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""
  constructor(private api:ApiService){}
  eventAdd=()=>
  {
    let pro:any={
      "productCode":this.productCode,
      "name":this.name,
      "mgDate":this.mgDate,
      "exDate":this.exDate,
      "brand":this.brand,
      "price":this.price,
      "sellerName":this.sellerName,
      "distributorName":this.distributorName
    }
    console.log(pro)
    this.api.adddata(pro).subscribe(
      (response)=>
      {
        console.log(response)
      }
    )
  }
}
