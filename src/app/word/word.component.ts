import { Component, OnInit } from '@angular/core';
import { WordsearchService } from '../wordsearch.service'

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  words:any
  constructor(private service : WordsearchService) { }

  search(term){
   this.words= this.service.Search_Word(term)
    }
    ngOnInit(){}
}


  

