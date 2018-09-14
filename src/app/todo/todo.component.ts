import { Component, OnInit } from '@angular/core';
import { Todoservice } from '../service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  constructor(private todoService : Todoservice) { }

  ngOnInit() {
    this.todoService.getTodos();
  }

}
