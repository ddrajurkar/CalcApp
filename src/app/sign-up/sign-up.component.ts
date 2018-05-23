import { Component, OnInit } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  gender: string[];

  usr: user;
    constructor() { }

  ngOnInit() {
    this.gender = ['Male','Female','Other'];
    this.usr = new user({
      Email:"ddr@gmail.com",
      pass:"1234",
      cpass:"1234",
      gender:this.gender[0],
      tnc:false
    });
    console.log(this.usr);
  }

}
