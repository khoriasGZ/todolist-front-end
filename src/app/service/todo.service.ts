import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todoservice {
  todos : Observable<Todo[]>
  
  
  constructor(private http : HttpClient) {
   }

   getTodos(){
     this.todos = this.http.get<Todo[]>('http://localhost:8080/Todo_180913/api/todos');
   }
   getTodo(id): Observable<Todo> {
    return this.http
      .get<Todo>("http://localhost:8080/api/Todos/" + id);
  }
  deleteTodo(id) {
    this.http.delete<Todo[]>('http://localhost:8080/Todo_180913/api/todos/'+id)
    .subscribe(_ =>  {    this.todos = this.http.get<Todo[]>('http://localhost:8080/Todo_180913/api/todos')}
  );
  }
  createTodo(todo: Todo) {
   this.http.post<Todo>('http://localhost:8080/Todo_180913/api/todos',todo)
  .subscribe(_ =>  {    this.todos = this.http.get<Todo[]>('http://localhost:8080/Todo_180913/api/todos')})
  }
}