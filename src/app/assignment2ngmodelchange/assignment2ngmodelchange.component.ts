import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2ngmodelchange',
  templateUrl: './assignment2ngmodelchange.component.html',
  styleUrls: ['./assignment2ngmodelchange.component.css']
})
export class Assignment2ngmodelchangeComponent {

  stateName:string="";
  cityNames:string[] = [] ;
   
   constructor(){
  
    }
  
    states:any = {
      1:["Mumbai","Pune","Nashik"],
      2:["Jaipur","Jodhpur"],
      3:["Indore","Bhopal"]
   }
  
  
  getCityNames(){
    this.cityNames =  this.states[this.stateName];
    console.log(this.cityNames)
  }
}


