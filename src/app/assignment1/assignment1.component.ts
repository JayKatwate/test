import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  productname:string="";
  productprice!:number;
  productquantity!:number;
  productdiscount!:number;
  totalprice!:number;

  total(){
    if(this.productdiscount==0){
      this.totalprice=this.productprice*this.productquantity
    }
    if(this.productdiscount!=0){
      this.totalprice=(this.productprice*this.productquantity)-this.productdiscount
    }
  }

}
