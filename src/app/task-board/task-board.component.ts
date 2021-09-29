import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  task: any;
  showPopUp: boolean = false;
  toDo: any =[{title: "task 1", description: "to do task 1", status: "to do"}, 
    {title: "task 2", description: "to do task 2", status: "to do"},
    {title: "task 3", description: "to do task 3", status: "to do"},
    {title: "task 4", description: "to do task 4", status: "to do"}];
  
  inProgress: any =[{title: "task 5", description: "in progress task 5", status: "in progress"},
    {title: "task 6", description: "in progress task 6", status: "in progress"},
    {title: "task 7", description: "in progress task 7", status: "in progress"}];

  done: any = [{title: "task 8", description: "done task 8", status: "done"},
    {title: "task 9", description: "done task 9", status: "done"},
    {title: "task 10", description: "done task 10", status: "done"},
    {title: "task 11", description: "done task 11", status: "done"}, 
    {title: "task 12", description: "done task 12", status: "done"}];

  
  constructor() { }

  ngOnInit(): void {
  }

  openPopUp(){
    this.task = {title: "", descripton: "", status: ""}
    this.showPopUp = true;
  }

  openEditPopUp(task: any){
    this.task = task;
    this.showPopUp = true;
  }
}
