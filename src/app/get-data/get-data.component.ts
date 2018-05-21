import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';
import { error } from 'util';
import  { Http } from '@angular/http';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

 synonyms: any
 public term : string
  constructor(private gdService : GetdataService) { 
    //this.gdService.getData('Hello').subscribe(response => {console.log('Response is : ',response)},error => {console.log('Something went wrong',error)}) 
  }
  searchSyn();
  searchSyn(){
    this.gdService.getData(this.term).subscribe(result => {this.synonyms = result})
    //this.gdService.getData('hello').subscribe(result => {this.synonyms = result});
  }

  
  ngOnInit() {
  }

}
