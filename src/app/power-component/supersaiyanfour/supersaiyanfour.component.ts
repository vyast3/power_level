import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
@Input() power;
  constructor() { }

  ngOnInit() {
  }

   ngOnChanges() {
     console.log(this.power)

    this.power = this.power * 500;
    console.log(this.power)
  }
}
