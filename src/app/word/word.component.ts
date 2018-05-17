import { Component, OnInit } from '@angular/core';
import { WordsearchService } from '../wordsearch.service'
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  words:any
  constructor(private service : WordsearchService) { }

 
    ngOnInit(){}

    search(term){
      this.service.callAPi(term).subscribe(res => {this.words = res});
        }
}


  

