import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  firstname:string="jay";
  lastname:string="katwate";
  imagepath:string="./../assets/Images/wallpaperflare.com_wallpaper.jpg";
  otpa:number=1000;
  counter:number=0;

  adressobj:any={
    lane1:"Mundhe",
    city:"karad",
    state:"Maharashtra",
    Pincode:415124
  }

  otp(){
    
    this.otpa++
    this.counter++
  }

}
