import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {
   
  power:number;
  power2:number

  savePower(){
    console.log(this.power);
    this.power2 = this.power;
  }

  constructor() { }

  ngOnInit() {
  }
  

}
