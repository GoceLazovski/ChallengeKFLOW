import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() task: any;
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() editTask = new EventEmitter<object>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close(value: boolean){
    this.closePopup.emit(value);
  }

  submit(task: any){
    if(task.title == ""){
      
    }
    else{
      this.editTask.emit(task);
    }
  }
}
