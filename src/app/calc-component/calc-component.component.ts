import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponentComponent implements OnInit {
  public number1 : number;
  public number2 : number;
  public result : number;

  add():void
  {
this.result = this.number1 + this.number2;
  }
  constructor() { }

  ngOnInit() {
  }

  
}
