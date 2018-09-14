import { Component, OnInit } from '@angular/core';
import { Todoservice } from '../service/todo.service';
import { FormBuilder } from '@angular/forms';
import { Todo } from '../model/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo : Todo = new Todo();


  constructor(private todoService : Todoservice) { }

  ngOnInit() {
    this.todoService.getTodos();
  }

  delete(id) {
    this.todoService.deleteTodo(id);
  }
  create() {
    this.todoService.createTodo(this.todo);
  }

}
