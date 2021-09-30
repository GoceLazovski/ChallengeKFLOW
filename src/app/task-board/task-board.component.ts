import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  tasks: any = [{"id": 0, "title": "task 1", "description": "to do task 1", "status": "to do"}, 
   {"id": 1, "title": "task 2", "description": "to do task 2", "status": "to do"},
   {"id": 2, "title": "task 3", "description": "to do task 3", "status": "to do"},
   {"id": 3, "title": "task 4", "description": "to do task 4", "status": "to do"},
   {"id": 4, "title": "task 5", "description": "in progress task 5", "status": "in progress"},
   {"id": 5, "title": "task 6", "description": "in progress task 6", "status": "in progress"},
   {"id": 6, "title": "task 7", "description": "in progress task 7", "status": "in progress"},
   {"id": 7, "title": "task 8", "description": "done task 8", "status": "done"},
   {"id": 8, "title": "task 9", "description": "done task 9", "status": "done"},
   {"id": 9, "title": "task 10", "description": "done task 10", "status": "done"},
   {"id": 10, "title": "task 11", "description": "done task 11", "status": "done"}, 
   {"id": 11, "title": "task 12", "description": "done task 12", "status": "done"}];

  task: any;
  showPopUp: boolean = false;
  toDo: any=[];
  inProgress: any=[];
  done: any=[];
  editedArray: any=[];

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.createArrays();
    console.log(localStorage.getItem('tasks'));
  }

  createArrays(){
    this.toDo = this.tasks.filter((task: any) => task.status == "to do");
    this.inProgress = this.tasks.filter((task: any) => task.status == "in progress");
    this.done = this.tasks.filter((task: any) => task.status == "done");
  }

  openPopUp(){
    this.task = {"title": "", "descripton": "", "status": ""}
    this.showPopUp = true;
  }

  openEditPopUp(task: any){
    this.task = task;
    this.showPopUp = true;
  }

  editTask(value: any){
    if(value.id == undefined){
      this.editedArray = this.tasks.map(function(task: any){
        return task;
      });
      this.editedArray.push(Object.assign({}, value));
    }
    else{
      this.editedArray = this.tasks.map(function(task: any){
        if(value.id == task.id){
          task = value;
        }
        return task;
      })
    }
    this.tasks = this.editedArray.map(function(task: any){
      return task;
    });
    console.log(this.tasks);
    console.log(this.editedArray);
    this.showPopUp = false;
  }
}
