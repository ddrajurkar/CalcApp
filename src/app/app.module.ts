import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcComponentComponent } from './calc-component/calc-component.component'
import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';
import { HttpModule } from '@angular/http';
import {WordsearchService} from './wordsearch.service'

@NgModule({
  declarations: [
    AppComponent,
    CalcComponentComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WordsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }