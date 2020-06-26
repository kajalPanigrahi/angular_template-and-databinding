import { Component } from '@angular/core';


//Model Class for Note Data

class Note{
  title:string;
  text:string;

  constructor(){
    this.title='';
    this.text='';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note : Note = new Note();

  constructor(){
    
  }

  takeNote(){
    console.log('Taking Note');
    console.log(this.note);

    this.note = new Note();
  }

}
